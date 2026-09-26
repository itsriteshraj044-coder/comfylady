import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Send } from 'lucide-react'
import { LUXE_EASE } from '../animations/variants'
import { contactPage } from '../content/content'
import { cx } from '../utils/motion'
import { sendEnquiry } from '../utils/enquiry'

const { form } = contactPage

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  purpose: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const EMPTY: FormState = { name: '', company: '', email: '', phone: '', purpose: '', message: '' }

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (values.name.trim().length < 2) errors.name = form.errors.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = form.errors.email
  if (values.phone.replace(/[^\d]/g, '').length < 7) errors.phone = form.errors.phone
  if (!values.purpose) errors.purpose = form.errors.purpose
  if (values.message.trim().length < 10) errors.message = form.errors.message
  return errors
}

/**
 * Enquiry form with inline validation. Errors are announced through
 * `aria-invalid`/`aria-describedby` and only surface after a field has been
 * touched, so nothing shouts at you mid-typing.
 *
 * Enquiries are emailed via `sendEnquiry` (see utils/enquiry.ts).
 */
export default function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)
  const [sendFailed, setSendFailed] = useState(false)

  const update =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = { ...values, [field]: event.target.value }
      setValues(next)
      if (touched[field]) setErrors(validate(next))
    }

  const blur = (field: keyof FormState) => () => {
    setTouched((previous) => ({ ...previous, [field]: true }))
    setErrors(validate(values))
  }

  /**
   * The latest send, keyed by its contents, so an unchanged form is emailed
   * once — even when the submit button is pressed while the background send
   * from the consent box is still in flight. A failed send is forgotten so it
   * can be retried.
   */
  const lastSend = useRef<{ key: string; request: Promise<void> } | null>(null)

  const deliver = (enquiry: FormState) => {
    const key = JSON.stringify(enquiry)
    if (lastSend.current?.key === key) return lastSend.current.request
    const request = sendEnquiry(enquiry).catch((error: unknown) => {
      if (lastSend.current?.request === request) lastSend.current = null
      throw error
    })
    lastSend.current = { key, request }
    return request
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (status === 'sending') return
    if (!consent) {
      setConsentError(true)
      document.getElementById('contact-consent')?.focus()
      return
    }

    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, phone: true, purpose: true, message: true })
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0]
      document.getElementById(`contact-${first}`)?.focus()
      return
    }

    setStatus('sending')
    setSendFailed(false)
    try {
      await deliver(values)
      setStatus('sent')
    } catch {
      setSendFailed(true)
      setStatus('idle')
    }
  }

  /**
   * Ticking the consent box emails the enquiry in the background as soon as
   * every field is valid. Nothing changes on screen: the thank-you message only
   * appears once the visitor presses the submit button.
   */
  const handleConsent = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setConsent(checked)
    setConsentError(false)
    if (checked && Object.keys(validate(values)).length === 0) {
      deliver(values).catch(() => {
        /* The submit button retries the send. */
      })
    }
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setTouched({})
    setConsent(false)
    setConsentError(false)
    setSendFailed(false)
    lastSend.current = null
    setStatus('idle')
  }

  const fieldClass = (field: keyof FormState) =>
    cx(
      'w-full border-b bg-transparent py-3 text-ink transition-colors duration-500 placeholder:text-ink-muted/60 focus:outline-none',
      errors[field] && touched[field]
        ? 'border-rose-600'
        : 'border-ink-line focus:border-rose-400',
    )

  const labelClass = 'block font-sans text-[0.6rem] uppercase tracking-luxe text-ink-muted'

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: LUXE_EASE }}
            className="flex flex-col items-center rounded-sm border border-ink-line bg-blush-100/60 px-8 py-16 text-center"
            role="status"
            aria-live="polite"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 180, damping: 14 }}
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-white"
            >
              <motion.span
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Check className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </motion.span>
            </motion.span>

            <h3 className="mt-8 font-display text-[clamp(1.6rem,2.4vw,2.25rem)] font-light text-ink">
              {form.success.title}
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {form.success.text}
            </p>
            <button type="button" onClick={reset} className="link-underline mt-8">
              {form.success.reset}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2"
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                {form.fields.name.label} <span aria-hidden="true" className="text-rose-500">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={values.name}
                onChange={update('name')}
                onBlur={blur('name')}
                placeholder={form.fields.name.placeholder}
                aria-invalid={Boolean(errors.name && touched.name)}
                aria-describedby={errors.name && touched.name ? 'error-name' : undefined}
                className={fieldClass('name')}
              />
              {errors.name && touched.name && (
                <p id="error-name" className="mt-2 text-xs text-rose-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="contact-company" className={labelClass}>
                {form.fields.company.label}
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={update('company')}
                placeholder={form.fields.company.placeholder}
                className={fieldClass('company')}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                {form.fields.email.label} <span aria-hidden="true" className="text-rose-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={update('email')}
                onBlur={blur('email')}
                placeholder={form.fields.email.placeholder}
                aria-invalid={Boolean(errors.email && touched.email)}
                aria-describedby={errors.email && touched.email ? 'error-email' : undefined}
                className={fieldClass('email')}
              />
              {errors.email && touched.email && (
                <p id="error-email" className="mt-2 text-xs text-rose-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                {form.fields.phone.label} <span aria-hidden="true" className="text-rose-500">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={values.phone}
                onChange={update('phone')}
                onBlur={blur('phone')}
                placeholder={form.fields.phone.placeholder}
                aria-invalid={Boolean(errors.phone && touched.phone)}
                aria-describedby={errors.phone && touched.phone ? 'error-phone' : undefined}
                className={fieldClass('phone')}
              />
              {errors.phone && touched.phone && (
                <p id="error-phone" className="mt-2 text-xs text-rose-600">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Purpose */}
            <div className="sm:col-span-2">
              <label htmlFor="contact-purpose" className={labelClass}>
                {form.fields.purpose.label}{' '}
                <span aria-hidden="true" className="text-rose-500">*</span>
              </label>
              <select
                id="contact-purpose"
                name="purpose"
                required
                value={values.purpose}
                onChange={update('purpose')}
                onBlur={blur('purpose')}
                aria-invalid={Boolean(errors.purpose && touched.purpose)}
                aria-describedby={errors.purpose && touched.purpose ? 'error-purpose' : undefined}
                className={cx(fieldClass('purpose'), 'cursor-pointer appearance-none pr-8')}
              >
                <option value="" disabled>
                  {form.fields.purpose.placeholder}
                </option>
                {form.purposeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.purpose && touched.purpose && (
                <p id="error-purpose" className="mt-2 text-xs text-rose-600">
                  {errors.purpose}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className={labelClass}>
                {form.fields.message.label}{' '}
                <span aria-hidden="true" className="text-rose-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={values.message}
                onChange={update('message')}
                onBlur={blur('message')}
                placeholder={form.fields.message.placeholder}
                aria-invalid={Boolean(errors.message && touched.message)}
                aria-describedby={errors.message && touched.message ? 'error-message' : undefined}
                className={cx(fieldClass('message'), 'resize-y')}
              />
              {errors.message && touched.message && (
                <p id="error-message" className="mt-2 text-xs text-rose-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-sm">
                <label
                  htmlFor="contact-consent"
                  className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-ink-muted"
                >
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={handleConsent}
                    aria-invalid={consentError}
                    aria-describedby={consentError ? 'error-consent' : undefined}
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-rose-500"
                  />
                  <span>{form.consent}</span>
                </label>
                {consentError && (
                  <p id="error-consent" className="mt-2 text-xs text-rose-600">
                    {form.errors.consent}
                  </p>
                )}
                {sendFailed && (
                  <p className="mt-2 text-xs text-rose-600" role="alert">
                    {form.errors.send}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary group shrink-0 disabled:cursor-wait disabled:opacity-70"
              >
                <span className="relative z-10">
                  {status === 'sending' ? form.submittingLabel : form.submitLabel}
                </span>
                <Send
                  className="relative z-10 h-[1.05em] w-[1.05em] transition-transform duration-500 ease-luxe group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

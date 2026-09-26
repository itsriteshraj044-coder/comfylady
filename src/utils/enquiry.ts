import { contactDetails } from '../content/content'

/**
 * Enquiries are emailed through FormSubmit (formsubmit.co), which needs no
 * backend or API key. The very first submission sends an activation email to
 * the inbox below — click the link in it once, and every enquiry after that
 * arrives as a normal email.
 */
const ENDPOINT = `https://formsubmit.co/ajax/${contactDetails.emailGeneral}`

export interface Enquiry {
  name: string
  company: string
  email: string
  phone: string
  purpose: string
  message: string
}

export async function sendEnquiry(enquiry: Enquiry): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: `New enquiry: ${enquiry.purpose} — ${enquiry.name}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: enquiry.email,
      Name: enquiry.name,
      Company: enquiry.company || '—',
      Email: enquiry.email,
      Phone: enquiry.phone,
      Purpose: enquiry.purpose,
      Message: enquiry.message,
    }),
  })
  if (!response.ok) throw new Error(`Enquiry failed: ${response.status}`)
}

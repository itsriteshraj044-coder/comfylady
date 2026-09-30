import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js/max'
import { cx } from '../utils/motion'

/* Flags are real SVG files rather than emoji: Windows renders flag emoji as
   bare letters. `?no-inline` keeps each one a separate file, so only the
   flags that are actually shown get downloaded. */
const flagFiles = import.meta.glob<string>('../../node_modules/country-flag-icons/3x2/*.svg', {
  query: '?no-inline',
  import: 'default',
  eager: true,
})

const flagUrl = (code: string) => flagFiles[`../../node_modules/country-flag-icons/3x2/${code}.svg`]

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

interface Country {
  code: CountryCode
  name: string
  dial: string
}

const COUNTRIES: Country[] = getCountries()
  .filter((code) => flagUrl(code))
  .map((code) => ({
    code,
    name: regionNames.of(code) ?? code,
    dial: getCountryCallingCode(code),
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

interface CountryCodeSelectProps {
  value: CountryCode
  onChange: (code: CountryCode) => void
  /** Tone of the idle label, so it matches the phone input beside it. */
  className?: string
}

/**
 * Flag + dialing-code picker that sits inside the phone field. Opens a
 * searchable list (by country name or code); Escape or a click outside closes it.
 */
export default function CountryCodeSelect({ value, onChange, className }: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const rootRef = useRef<HTMLDivElement | null>(null)
  const searchRef = useRef<HTMLInputElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const selected = COUNTRIES.find((country) => country.code === value)

  const results = useMemo(() => {
    const term = query.trim().toLowerCase().replace(/^\+/, '')
    if (!term) return COUNTRIES
    return COUNTRIES.filter(
      (country) =>
        country.name.toLowerCase().includes(term) ||
        country.dial.startsWith(term) ||
        country.code.toLowerCase() === term,
    )
  }, [query])

  useEffect(() => {
    if (!open) return
    searchRef.current?.focus()
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (code: CountryCode) => {
    onChange(code)
    setOpen(false)
    setQuery('')
    buttonRef.current?.focus()
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${selected?.name ?? value} +${selected?.dial ?? ''}`}
        className={cx(
          'flex h-full items-center gap-2 py-3 pr-3 text-ink transition-colors duration-500 hover:text-rose-600 focus:outline-none focus-visible:text-rose-600',
          className,
        )}
      >
        <img src={flagUrl(value)} alt="" className="h-3.5 w-[1.3125rem] rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
        <span className="tabular-nums">+{selected?.dial}</span>
        <ChevronDown
          className={cx('h-3.5 w-3.5 text-ink-muted transition-transform duration-300', open && 'rotate-180')}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-30 mt-2 w-[min(18rem,80vw)] rounded-sm border border-ink-line bg-cream shadow-[0_28px_60px_-30px_rgba(90,50,56,0.45)]">
          <div className="flex items-center gap-2 border-b border-ink-line px-3">
            <Search className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.5} aria-hidden="true" />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  if (results[0]) choose(results[0].code)
                }
              }}
              placeholder="Search country or code"
              aria-label="Search country or code"
              className="w-full bg-transparent py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none"
            />
          </div>

          <ul role="listbox" aria-label="Country codes" data-lenis-prevent className="max-h-64 overflow-y-auto overscroll-contain py-1">
            {results.map((country) => (
              <li key={country.code} role="option" aria-selected={country.code === value}>
                <button
                  type="button"
                  onClick={() => choose(country.code)}
                  className={cx(
                    'flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-blush-100 focus:bg-blush-100 focus:outline-none',
                    country.code === value ? 'text-rose-600' : 'text-ink',
                  )}
                >
                  <img
                    src={flagUrl(country.code)}
                    alt=""
                    loading="lazy"
                    className="h-3.5 w-[1.3125rem] shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
                  />
                  <span className="flex-1 truncate">{country.name}</span>
                  <span className="tabular-nums text-ink-muted">+{country.dial}</span>
                </button>
              </li>
            ))}
            {results.length === 0 && <li className="px-3 py-3 text-sm text-ink-muted">No matches</li>}
          </ul>
        </div>
      )}
    </div>
  )
}

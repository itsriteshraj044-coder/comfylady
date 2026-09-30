import {
  AsYouType,
  getCountryCallingCode,
  getExampleNumber,
  isValidPhoneNumber,
  parsePhoneNumber,
  type CountryCode,
} from 'libphonenumber-js/max'
import examples from 'libphonenumber-js/examples.mobile.json'

/* The "max" metadata checks each country's real numbering plan (valid
   prefixes and lengths), not just a digit count. */

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

export const countryName = (country: CountryCode) => regionNames.of(country) ?? country

/** A sample mobile number as written after the dialing code, e.g. "81234 56789"
    for India — the international form minus "+91", so no domestic leading 0. */
export const phonePlaceholder = (country: CountryCode) => {
  const example = getExampleNumber(country, examples)
  if (!example) return ''
  return example.formatInternational().replace(`+${example.countryCallingCode}`, '').trim()
}

/**
 * Formats the digits the way the placeholder shows them, as the visitor types.
 * A domestic trunk prefix ("0" in the UK or India) is dropped because the
 * dialing code already sits beside the field — but only where the country's
 * numbering plan says so (Italy keeps its leading 0).
 */
export const formatPhone = (value: string, country: CountryCode) => {
  const digits = value.replace(/\D/g, '')
  const national = new AsYouType(country)
  national.input(digits)
  const prefix = `+${getCountryCallingCode(country)}`
  const number = national.getNumber()?.nationalNumber ?? digits
  return new AsYouType(country).input(prefix + number).replace(prefix, '').trim()
}

export const isValidPhone = (value: string, country: CountryCode) =>
  isValidPhoneNumber(value, country)

/** "+91 81234 56789" — used in the enquiry email. Call only on a valid number. */
export const internationalPhone = (value: string, country: CountryCode) =>
  parsePhoneNumber(value, country).formatInternational()

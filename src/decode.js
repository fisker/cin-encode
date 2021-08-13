import {decode as numberDecode} from './number.js'
import {
  toString as toDateString,
  validate as validateDateString,
} from './date-of-birth.js'
import {REST_LENGTH, MINIMUM_REST_ENCODED_LENGTH} from './constants.js'
import padStart from './pad-start.js'
import {generate as checksum} from './checksum.js'

function decode(string) {
  if (typeof string !== 'string') {
    throw new TypeError('input should be a string')
  }

  const encodedRest = string.slice(-MINIMUM_REST_ENCODED_LENGTH)
  const encodedDateIndex = string.slice(0, -encodedRest.length)
  const dateIndex = numberDecode(encodedDateIndex)
  const dateString = toDateString(dateIndex)

  if (!validateDateString(dateString)) {
    throw new Error('input is not a encoded Citizen identification number')
  }

  const restString = padStart(numberDecode(encodedRest), REST_LENGTH, '0')

  const parts = restString.slice(0, 6) + dateString + restString.slice(6)

  return parts + checksum(parts)
}

export default decode

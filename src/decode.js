import {decode as numberDecode} from './number'
import {toDate as toBirthdate} from './birthdate'
import {REST_LENGTH, MINIMUM_REST_ENCODED_LENGTH} from './constants'
import padStart from './pad-start'
import generateCheckBit from './generate-check-bit'

function decode(string) {
  if (typeof string !== 'string') {
    throw new TypeError('input should be a string')
  }

  const restEncoded = string.slice(-MINIMUM_REST_ENCODED_LENGTH)
  const birthdateIndexEncoded = string.slice(0, -restEncoded.length)

  const birthdateString = toBirthdate(numberDecode(birthdateIndexEncoded))
  const rest = padStart(numberDecode(restEncoded), REST_LENGTH, '0')

  const parts = rest.slice(0, 6) + birthdateString + rest.slice(6)

  return parts + generateCheckBit(parts)
}

export default decode

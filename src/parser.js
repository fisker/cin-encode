import {
  validate as validateDateString,
  toIndex as toDateIndex,
} from './date-of-birth.js'
import {validate as checksumValidate} from './checksum.js'

function parse(id) {
  if (typeof id !== 'string') {
    throw new TypeError('Citizen identification number should be string')
  }

  const {length} = id

  const addressCode = id.slice(0, 6)
  let dateString = ''
  let orderCode = ''
  if (length === 15) {
    dateString = `19${id.slice(6, 12)}`
    orderCode = id.slice(12, 15)
  } else if (length === 18) {
    if (!checksumValidate(id)) {
      throw new Error('Invalid Citizen identification number')
    }
    dateString = id.slice(6, 14)
    orderCode = id.slice(14, 17)
  } else {
    throw new Error('Citizen identification number should be 15 or 18 digits')
  }

  if (!validateDateString(dateString)) {
    throw new RangeError(
      'Citizen identification number should contain validate date of birth'
    )
  }

  return [toDateIndex(dateString), addressCode + orderCode]
}

export default parse

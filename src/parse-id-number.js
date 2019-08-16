import {
  validate as validateBirthdate,
  toIndex as toDateIndex,
} from './birthdate'
import generateCheckBit from './generate-check-bit'

function parse(id) {
  if (typeof id !== 'string') {
    throw new TypeError('Citizen identification number should be string')
  }

  const {length} = id
  const regionCode = id.slice(0, 6)
  let birthDateString = ''
  let orderNumber = ''
  let checkBit = ''
  if (length === 15) {
    birthDateString = `19${id.slice(6, 12)}`
    orderNumber = id.slice(12, 15)
  } else if (length === 18) {
    birthDateString = id.slice(6, 14)
    orderNumber = id.slice(14, 17)
    checkBit = id[17]
  } else {
    throw new Error('Citizen identification number should be 15 or 18 digits')
  }

  if (!validateBirthdate(birthDateString)) {
    throw new RangeError(
      'Citizen identification number should contain validate birthdate'
    )
  }

  if (checkBit && generateCheckBit(id) !== checkBit) {
    throw new Error(`Invalid Citizen identification number`)
  }

  return [toDateIndex(birthDateString), regionCode + orderNumber]
}

export default parse

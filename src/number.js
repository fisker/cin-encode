import {NUMBER_ENCODE_CHARSET as CHARSET} from './constants'

const CHAR_VALUES = {}
const BASE = CHARSET.length

for (let index = 0; index < BASE; index += 1) {
  const chr = CHARSET[index]
  CHAR_VALUES[chr] = index
}

function encode(number) {
  let string = ''

  do {
    const value = number % BASE
    string = CHARSET[value] + string
    number = (number - value) / BASE
  } while (number > 0)

  return string
}

function decode(string) {
  let number = 0
  let index = 0
  const {length} = string

  for (; index < length; index += 1) {
    const chr = string[index]
    const value = CHAR_VALUES[chr]
    number += value * BASE ** (length - index - 1)
  }

  return number
}

const ZERO_VALUE_CHR = CHARSET[0]

export {encode, decode, ZERO_VALUE_CHR as ZERO}

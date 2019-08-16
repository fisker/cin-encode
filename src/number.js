const CHARSET =
  'fiskerabcdghjlmnopqtuvwxyz0123456789FISKERABCDGHJLMNOPQTUVWXYZ_-*!'
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

function getMinimumLength(numberLength) {
  const maximum = 10 ** numberLength
  let exponent = 1
  while (BASE ** exponent < maximum) {
    exponent += 1
  }

  return exponent
}

const ZERO_VALUE_CHR = CHARSET[0]

export {encode, decode, getMinimumLength, ZERO_VALUE_CHR as ZERO}

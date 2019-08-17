// All url friendly charachters
// Array.from({length: 128}, (_, i) => String.fromCharCode(i)).filter(x => x === encodeURIComponent(x))
// !'()*-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~

const BASE_CHARS =
  'fisker!FISKER~0123456789-abcdghjlmnopqtuvwxyz*ABCDGHJLMNOPQTUVWXYZ'
const BASE = BASE_CHARS.length

const CHAR_VALUES = {}

for (let index = 0; index < BASE; index += 1) {
  const chr = BASE_CHARS[index]
  CHAR_VALUES[chr] = index
}

function encode(number) {
  let string = ''

  do {
    const value = number % BASE
    string = BASE_CHARS[value] + string
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

const ZERO_VALUE_CHR = BASE_CHARS[0]

export {encode, decode, ZERO_VALUE_CHR as ZERO, BASE}

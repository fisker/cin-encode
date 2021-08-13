import {encode as numberEncode, ZERO as ZERO_VALUE_CHR} from './number.js'
import parser from './parser.js'
import trimStart from './trim-start.js'
import padStart from './pad-start.js'
import {MINIMUM_REST_ENCODED_LENGTH} from './constants.js'

function encode(id) {
  const [dateIndex, restString] = parser(id)
  const encodedDateIndex = numberEncode(dateIndex)
  const encodedRestString = padStart(
    numberEncode(restString),
    MINIMUM_REST_ENCODED_LENGTH,
    ZERO_VALUE_CHR
  )

  return trimStart(encodedDateIndex + encodedRestString, ZERO_VALUE_CHR)
}

export default encode

import {encode as numberEncode, ZERO as ZERO_VALUE_CHR} from './number'
import parser from './parser'
import trimStart from './trim-start'
import padStart from './pad-start'
import {MINIMUM_REST_ENCODED_LENGTH} from './constants'

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

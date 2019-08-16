import {encode as numberEncode, ZERO as ZERO_VALUE_CHR} from './number'
import parseIDNumber from './parse-id-number'
import trimStart from './trim-start'
import padStart from './pad-start'
import {MINIMUM_REST_ENCODED_LENGTH} from './constants'

function encode(id) {
  const [birthdateIndex, rest] = parseIDNumber(id)
  const birthdateIndexEncoded = numberEncode(birthdateIndex)
  const restEncoded = padStart(
    numberEncode(rest),
    MINIMUM_REST_ENCODED_LENGTH,
    ZERO_VALUE_CHR
  )

  return trimStart(birthdateIndexEncoded + restEncoded, ZERO_VALUE_CHR)
}

export default encode

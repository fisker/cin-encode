import {BASE} from './number.js'

const REST_LENGTH = 9
const MINIMUM_REST_ENCODED_LENGTH = Math.ceil(
  Math.log(10 ** REST_LENGTH) / Math.log(BASE),
)

export {REST_LENGTH, MINIMUM_REST_ENCODED_LENGTH, BASE}

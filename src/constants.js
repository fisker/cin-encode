const NUMBER_ENCODE_CHARSET =
  'fiskerabcdghjlmnopqtuvwxyz0123456789FISKERABCDGHJLMNOPQTUVWXYZ_-*!'
const REST_LENGTH = 9
const MINIMUM_REST_ENCODED_LENGTH = (function getMinimumLength(numberLength) {
  const maximum = 10 ** numberLength
  let exponent = 1
  while (NUMBER_ENCODE_CHARSET.length ** exponent < maximum) {
    exponent += 1
  }

  return exponent
})(9)

export {REST_LENGTH, MINIMUM_REST_ENCODED_LENGTH, NUMBER_ENCODE_CHARSET}

const {padStart} = String.prototype

const nativePad = (string, targetLength, padString = '0') =>
  padStart.call(string, targetLength, padString)
const pad = (string, targetLength, padString = '0') => {
  if (string.length >= targetLength) {
    return string
  }

  const padLength = targetLength - string.length
  // eslint-disable-next-line unicorn/no-new-array
  return new Array(padLength + 1).join(padString) + string
}

export default padStart ? nativePad : pad

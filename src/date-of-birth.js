import padStart from './pad-start.js'

const START_DATE = UTCDate(1900, 1, 1)
const MILLISECONDS_PRE_DAY = 1000 * 60 * 60 * 24

function UTCDate(year, month, date) {
  return Date.UTC(year, month - 1, date, 0, 0, 0, 0)
}

function toIndex(string) {
  const year = Number(string.slice(0, 4))
  const month = Number(string.slice(4, 6))
  const date = Number(string.slice(6, 8))
  const time = UTCDate(year, month, date)
  return (time - START_DATE) / MILLISECONDS_PRE_DAY
}

function toString(index) {
  const time = new Date(Number(START_DATE) + MILLISECONDS_PRE_DAY * index)
  const year = padStart(time.getFullYear(), 4)
  const month = padStart(time.getMonth() + 1, 2)
  const date = padStart(time.getDate(), 2)

  return [year, month, date].join('')
}

function validate(string) {
  if (string.length !== 8) {
    return false
  }

  const year = Number(string.slice(0, 4))
  const month = Number(string.slice(4, 6))
  const date = Number(string.slice(6, 8))
  const timestamp = UTCDate(year, month, date)
  const time = new Date(timestamp)

  if (
    timestamp < START_DATE ||
    time.getFullYear() !== year ||
    time.getMonth() + 1 !== month ||
    time.getDate() !== date
  ) {
    return false
  }

  return true
}

export {toIndex, toString, validate}

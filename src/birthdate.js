import padStart from './pad-start'

const START_DATE = new Date(Date.UTC(1900, 0, 1, 0, 0, 0, 0))
const MILLISECONDS_PRE_DAY = 1000 * 60 * 60 * 24

function toIndex(string) {
  const year = Number(string.slice(0, 4))
  const month = Number(string.slice(4, 6))
  const date = Number(string.slice(6, 8))
  const time = new Date(Date.UTC(year, month - 1, date, 0, 0, 0, 0))

  return (time - START_DATE) / MILLISECONDS_PRE_DAY
}

function toDate(index) {
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
  const time = new Date(Date.UTC(year, month - 1, date, 0, 0, 0, 0))

  if (
    time < START_DATE ||
    time.getFullYear() !== year ||
    time.getMonth() + 1 !== month ||
    time.getDate() !== date
  ) {
    return false
  }
  return true
}

export {toIndex, toDate, validate}

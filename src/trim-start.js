function trimStart(string, trimString = ' ') {
  const {length} = trimString
  while (string[0] === trimString) {
    string = string.slice(length)
  }

  return string
}

export default trimStart

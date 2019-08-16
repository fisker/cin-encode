const factors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
const code = '10X98765432'

function checkBit(parts) {
  let sum = 0
  for (let index = 0; index < 17; index += 1) {
    sum += Number(parts[index]) * factors[index]
  }

  return code[sum % 11]
}

export default checkBit

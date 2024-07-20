import Big from "big.js";

export default function operator(num1, num2, operator) {
  const one = Big(num1 || '0')
  const two = Big(num2 || (operator === '/' || operator === 'x' ? '1' : '0'))

  if (operator === '+') return one.plus(two).toString()
  
  if (operator === '-') return one.minus(two).toString()

  if (operator === 'x') return one.times(two).toString()

  if (operator === '/') {
    if (two === 0){
      alert('don\'t divide by zero')
    } else {
      return one.div(two).toString()
    }
  }
}

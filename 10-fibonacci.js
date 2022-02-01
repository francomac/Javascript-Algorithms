function fibonacci(position) {
  // let sequence = []

  // for (let i = 0; i <= position; i++) {
  //   if (i < 3) sequence.push(1)
  //   else {
  //     sequence.push(sequence[i-1] + sequence[i-2])
  //   }
  // }
  // console.log(sequence)
  // console.log(sequence[position])

  if (position < 3) return 1
  else return fibonacci(position - 1) + fibonacci(position - 2)

}

module.exports = {
  fibonacci
}

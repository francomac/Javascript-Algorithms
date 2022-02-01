const { fizzBuzz } = require('./1-fizz-buzz.js')
const { harmlessRansomNote } = require('./2-harmless-ransom-note.js')
const { isPalindrome } = require('./3-palindrome.js')
const { caesarCipher } = require('./4-caesar-cipher.js')
const { reverseWords } = require('./5-reverse-words.js')
const { reverseArrayInPlace } = require('./6-reverse-array-in-place.js')
const { getMeanMedianMode } = require('./7-mean-median-mode.js')
const { twoSum } = require('./8-two-sum.js')
const { binarySearch } = require('./9-binary-search.js')
const { fibonacci } = require('./10-fibonacci.js')
const { fibMemo } = require('./11-fibonacci-memoized.js')
const { sieveOfEratosthenes } = require('./12-sieve-of-eratosthenes.js')


console.log('\n\nFizzBuzz Algorithm')
fizzBuzz(20);

console.log('\n\nHarmless Ransom Note Algorithm')
console.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));

console.log(harmlessRansomNote('this is a SECRET secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));

console.log('\n\nPalindrome Algorithm')
console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("Race Car"));
console.log(isPalindrome("Coding Javascript"));

console.log('\n\nCaesar Cipher Algorithm')
console.log(caesarCipher("\nZoo Keeper", 2)); // Bqq Mggrgt
console.log(caesarCipher("\nBig Car", -16)); // Lsq Mkb
console.log(caesarCipher("\nJavascript", -900)); // Tkfkcmbszd

console.log('\n\nReverse Words Algorithm')
console.log(reverseWords("Madam I'm Adam"))
console.log(reverseWords("Coding Javascript"))

console.log('\n\nReverse Array In Place Algorithm')
console.log(reverseArrayInPlace([4,3,1,2]))

console.log('\n\nMean Median Mode Algorithm')
console.log(getMeanMedianMode([1,2,3,4,5,4,6,1])); // mean: 3.24, mediam = 3.5, mode: [1,4]

console.log('\n\nTwo Sum Algorithm')
console.log(twoSum([1,6,4,5,3,3], 7)); // [[1,6],[3,4],[3,4]]
console.log(twoSum([40, 11, 19, 17, -12], 28)); // [[17, 11],[-12, 40]]

console.log('\n\nBinary Search Algorithm')
console.log(binarySearch([5,7,12,16,36,39,42,56,71], 56)) // true
console.log(binarySearch([5,7,12,16,36,39,42,56,71], 5)) // true
console.log(binarySearch([5,7,12,16,36,39,42,56,71], 100)) // false


console.log('\n\nFibonacci Algorithm')
console.log(fibonacci(4)) // 3
console.log(fibonacci(9)) // 34
console.log(fibMemo(15)) // 610
// console.log(fibonacci(50)) // THIS WILL CRASH
// console.log(fibonacci(1000)) // THIS WILL CRASH

console.log('\n\nFibonacci Memoized Algorithm')
// console.log(fibMemo(4)) // 3
console.log(fibMemo(9)) // 34
// console.log(fibMemo(15)) // 610
// console.log(fibMemo(50)) // THIS WILL WORKS => 12586269025
// console.log(fibMemo(1000)) // THIS WILL WORKS => 4.346655768693743e+208



console.log('\n\Sieve of Eratosthenes Algorithm')
console.log(sieveOfEratosthenes(9)) //
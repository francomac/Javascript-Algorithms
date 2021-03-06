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
const { bubbleSort } = require('./13-bubble-sort.js')
const { mergeSort } = require('./14-merge-sort.js')
const { maxStockProfit } = require('./15-max-stock-profit.js')


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
console.log(sieveOfEratosthenes(9)) // [2 ,3 ,5 ,7]


console.log('\n\Bubble Sort')
console.log(bubbleSort([23,6,8,23,74,7,1])) // [1,6,7,8,23,23,74]
console.log(bubbleSort([-2,16,83,23,54,72,01])) // [-2,  1, 16, 23, 54, 72, 83]


console.log('\n\Merge Sort')
console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198,764, 1,9,1])) // [1,   1,   3,    9,   34, 198, 200,  203,746, 764, 984, 6000]


console.log('\n\Max Stock Profit')
console.log('Max Buy Price: ', maxStockProfit([32, 46, 26, 38, 40, 48, 42])) // 22
console.log('Max Buy Price: ', maxStockProfit([10, 18, 4, 9, 6, 16, 12])) // 12
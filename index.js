const { fizzBuzz } = require('./1-fizz-buzz.js')
const { harmlessRansomNote } = require('./2-harmless-ransom-note.js')
const { isPalindrome } = require('./3-palindrome.js')
const { caesarCipher } = require('./4-caesar-cipher.js')
const { reverseWords } = require('./5-reverse-words.js')

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
console.log(caesarCipher("Zoo Keeper", 2)); // Bqq Mggrgt
console.log(caesarCipher("Big Car", -16)); // Lsq Mkb
console.log(caesarCipher("Javascript", -900)); // Tkfkcmbszd

console.log('\n\nReverse Words Algorithm')
console.log(reverseWords("Madam I'm Adam"))
console.log(reverseWords("Coding Javascript"))
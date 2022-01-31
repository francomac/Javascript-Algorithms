function reverseWords(str) {
  // 'This is text'

  let strArr = str.split(' '); // ['this', 'is', 'text'] 
  let newStrArr = [];

  console.log(str);

  strArr.forEach(word => {
    let reverseWord = '';
    let wordLength = word.length;
    let newWordsArr = word.split(''); // ['t', 'h', 'i', 's']

    while(wordLength > 0) {
      reverseWord += newWordsArr[wordLength-1] 
      wordLength--;
    }

    newStrArr.push(reverseWord);
  })
  console.log(newStrArr.join(' '))
}

module.exports = {
  reverseWords
}
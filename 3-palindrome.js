function isPalindrome(aString) {
  let myTxt = aString.toLowerCase();
  let charactersArr = myTxt.split('');

  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let lettersArr = [];

  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  })

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

module.exports = {
  isPalindrome
}
function caesarCipher(str, num) {
  num = num % 26;
  let lowerStr = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newStr = '';

  console.log(lowerStr)

  for (let i = 0; i < lowerStr.length; i++) {
    let currentLetter = lowerStr[i];

    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;

    if ( newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  return newStr;
}

module.exports = {
  caesarCipher
}
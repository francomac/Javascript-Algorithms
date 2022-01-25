function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {};

  // creating a hash table { word: num-times }
  magazineArr.forEach(word => {
    // its word not present in obj
    if (!magazineObj[word]) magazineObj[word] = 0;
    // its word present in obj
    magazineObj[word]++
  })

  let noteIsPossible = true;

  noteArr.forEach(word => {
    if(magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  })
  return noteIsPossible;
}

module.exports = {
  harmlessRansomNote
}
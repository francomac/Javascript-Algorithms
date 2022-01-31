function reverseArrayInPlace(myArray) {

  console.log(myArray);
  const myArrayLength = myArray.length;

  for (let i = 0; i < myArrayLength / 2; i++) {    
    let tempVal = myArray[i];

    myArray[i] = myArray[myArrayLength - 1 - i];
    myArray[myArrayLength - 1 - i] = tempVal
    
  }
  return myArray;
}

module.exports = {
  reverseArrayInPlace
}
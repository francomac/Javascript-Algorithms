function binarySearch(numArray, key) {
  let middleIndex = Math.floor(numArray.length / 2)
  let middleElem = numArray[middleIndex]

  if (middleElem === key) {
    return true
  } else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key)
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key)
  }
  else return false;
}

module.exports = {
  binarySearch
}


// ( [5,7,12,16,36,39,42,56,71], 56 )
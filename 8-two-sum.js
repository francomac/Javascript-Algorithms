function twoSum(numArray, sum) {
  let pairs = [];
  let hashTable = [];
 
  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    // value necessary to complet sum value
    let counterpart = sum - currNum;

    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}

module.exports = {
  twoSum
}
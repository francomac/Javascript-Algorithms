function bubbleSort(numbers) {

  let numbersToSort = numbers || [];
  let numbersProcessed = numbersToSort.length || 0;
  let isArrNotSorted = true;

  while(isArrNotSorted) {
    for (let i = 0; i <= numbersProcessed; i++) {

      if (numbers[i] > numbers[i+1]) {
        let tempVal = numbers[i];
        numbers[i] = numbers[i+1];
        numbers[i+1] = tempVal;
      }

    }
    numbersProcessed--;
    if (numbersProcessed < 2) isArrNotSorted = false
  }
  return numbersToSort
}

module.exports = {
  bubbleSort
}

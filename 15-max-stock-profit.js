function maxStockProfit(pricesArr) {

  console.log(pricesArr)
  
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {

    if(changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i+1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

module.exports = {
  maxStockProfit
}
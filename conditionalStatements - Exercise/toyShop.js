function toyShop(input) {
    let priceForHoliday = Number (input[0]);
    let countMaze = Number (input[1]);
    let countBarbi = Number (input[2]);
    let countBear = Number (input[3]);
    let countMinion = Number (input[4]);
    let countTruc = Number(input[5]);
    let priceMaze = countMaze * 2.6;
    let priceBarbi = countBarbi * 3;
    let priceBear = countBear* 4.1;
    let priceMinion = countMinion * 8.2;
    let priceTruc = countTruc * 2;
    let totalCountToys = countMaze + countBarbi + countBear + countMinion + countTruc;
    let totalPrice = priceMaze + priceBarbi + priceBear + priceMinion + priceTruc;

    if (totalCountToys >=50 ) {
        discount = totalPrice * 0.25;
        totalPrice = totalPrice - discount
    }
    let rentStore = totalPrice * 0.1;

    let profit = totalPrice - rentStore;



   if (profit >= priceForHoliday ) {
        console.log (` Yes! ${(profit -priceForHoliday).toFixed(2)} lv left.`)
   } else {
    console.log (`Not enough money! ${(priceForHoliday - profit).toFixed(2)} lv needed.`)
   }
  

}   

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])







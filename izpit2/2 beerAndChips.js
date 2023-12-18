function beerAndChips(input) {
    let nameFootballMen = input[0];
    let budget = Number(input[1]);
    let numBottleBeer = Number(input[2]);
    let chipsBag = Number(input[3]);
    let priceBeer = 1.20;
    let totalPriceBeer = numBottleBeer * priceBeer;
    let priceChips = totalPriceBeer * 0.45;
    let totalPriceChips = Math.ceil(chipsBag * priceChips);
    let totalSum = totalPriceBeer + totalPriceChips;

    if (budget >= totalSum) {
        console.log(`${nameFootballMen} bought a snack and has ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`${nameFootballMen} needs ${(totalSum - budget).toFixed(2)} more leva!`);
    }


}

beerAndChips(["Valentin",
    "5",
    "2",
    "4"])


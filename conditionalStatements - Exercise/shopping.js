function shopping(input) {
    let budjet = Number (input[0]);
    let numVideocarts = Number (input[1]);
    let numprocesors = Number (input[2]);
    let numRam = Number (input[3]);
debugger
    let priceVideocarts = numVideocarts * 250;
    let priceProcesors = numprocesors * (priceVideocarts * 0.35);
    let priceRam = numRam * (priceVideocarts * 0.1);
  
    let totalSumEcuipment = priceVideocarts + priceProcesors + priceRam;
    
    if ( numVideocarts>numprocesors) {
        totalSumEcuipment = totalSumEcuipment - (totalSumEcuipment * 0.15);
    }
    if (budjet>=totalSumEcuipment) {
        console.log(`You have ${(budjet-totalSumEcuipment).toFixed(2)} leva left!`)
    } else {
        console.log (`Not enough money! You need ${(totalSumEcuipment - budjet).toFixed (2)} leva more!`)
    }


}

shopping (["900",
"2",
"1",
"3"])

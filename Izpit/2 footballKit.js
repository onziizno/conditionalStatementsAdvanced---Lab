function footballKit(input) {
    let priceThirt = Number(input[0]);
    let sumBonusBall = Number(input[1]);

    priceShorti = priceThirt * 0.75;
    priceSoks = priceShorti * 0.20;
    priceButoonki = (priceThirt + priceShorti) * 2;
    totalSumShoping = priceThirt + priceShorti + priceSoks + priceButoonki;
    sumAfterDiscount = (totalSumShoping * 0.85).toFixed(2);

    if (sumAfterDiscount >= sumBonusBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${sumAfterDiscount} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(sumBonusBall - sumAfterDiscount).toFixed(2)} lv. more.`);
    }

}

footballKit(["59.99",
    "500"])



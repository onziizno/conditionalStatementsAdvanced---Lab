function repainting(input) {
    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hoursForWork = Number(input[3]);
    let bags = 0.4

    let priceForNailon = (nailon + 2) * 1.5;
    let priceForPaint = (paint + paint * 0.1)* 14.5;
    let priceForRazreditel = razreditel * 5;

    let totalPriceForMaterial = priceForNailon + priceForPaint + priceForRazreditel + bags;
    let totalPriceForWorkPerOneHours = (totalPriceForMaterial * 0.3) * hoursForWork;
    let totalPrice = totalPriceForMaterial + totalPriceForWorkPerOneHours;

    console.log ("{сумата на всички разходи}" + totalPrice)

}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
)
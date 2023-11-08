function basketballEquipment(input) {
    let annualFeeForBasketballTraining = Number (input[0])

    let bassketbalShoes = annualFeeForBasketballTraining - (annualFeeForBasketballTraining * 0.4);
    let bassketbalTeam = bassketbalShoes - (bassketbalShoes * 0.2);
    let bassketBall = bassketbalTeam * 1/4;
    let bassketballAccesoarries = bassketBall * 1/5;

    let totalPriceForEkuipment = bassketbalShoes + bassketbalTeam + bassketBall + bassketballAccesoarries + annualFeeForBasketballTraining;
    console.log(totalPriceForEkuipment)

}

basketballEquipment(["365 "])
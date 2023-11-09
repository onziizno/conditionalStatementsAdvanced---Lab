function fishTank(input) {
    let lenghtFishTank = Number (input[0]);
    let wigthFishTank = Number (input[1]);
    let heightFishTank = Number (input[2]);
    let equipmentPrecentage = Number (input[3]);
    let volumeFishTankWithoutEquipment = (lenghtFishTank * wigthFishTank * heightFishTank) * 0.001;
    let volumeEquipment = volumeFishTankWithoutEquipment * equipmentPrecentage/100;
    let waterForFishTank = volumeFishTankWithoutEquipment - volumeEquipment;


    console.log(waterForFishTank)
}

fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)
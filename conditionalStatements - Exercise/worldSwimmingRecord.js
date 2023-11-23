function worldSwimmingRecord(input) {

    let worldRecord = Number (input[0]);
    let trasse = Number(input[1]);
    let timeFotOneMeterSwiming = Number(input[2]);
debugger
    let timeForSwiming = trasse * timeFotOneMeterSwiming;
    let decelerationFromWaterResistance = (Math.floor(trasse / 15)) * 12.5;
    let fulTimeFToSwimTheDistance = timeForSwiming + decelerationFromWaterResistance;
    
    if (worldRecord>fulTimeFToSwimTheDistance) {
        console.log (`Yes, he succeeded! The new world record is ${(fulTimeFToSwimTheDistance).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(fulTimeFToSwimTheDistance-worldRecord).toFixed(2)} seconds slower.`)
    }


}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

function lunchBreak(input) {

    let nameSerial = input[0];
    let episodeDuration = Number(input[1]);
    let lunchBreakDuration = Number(input[2]);
    let timeToLunch = lunchBreakDuration * 1/8;
    let timeToRelax = lunchBreakDuration * 1/4;
    let theRimainingTime = lunchBreakDuration - timeToRelax - timeToLunch;
    

    if (theRimainingTime >=episodeDuration) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(theRimainingTime - episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(episodeDuration - theRimainingTime)} more minutes.`)
    }
   
}

lunchBreak(["Teen Wolf",
"48",
"60"])


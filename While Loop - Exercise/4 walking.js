function walking(input) {
    let i = 0;
    
    let stepsSum = 0;
    
 
    while (input[i] !== "Going home") {
 
        steps = Number(input[i]);
        stepsSum += steps;
        i++;
 
        if (stepsSum >= 10000) {
            let diff = stepsSum - 10000;
            console.log(`Goal reached! Good job!\n${diff} steps over the goal!`);
            return;
        }
    }
 
    if (input[i] === "Going home") {
        stepsSum += Number(input[++i]);
    }
 
    let difference = stepsSum - 10000;
 
    if (stepsSum >= 10000) console.log(`Goal reached! Good job!\n${difference} steps over the goal!`);
    else console.log(`${Math.abs(difference)} more steps to reach goal.`);
 
}

walking(["1000",
"1500",
"2000",
"6500"])

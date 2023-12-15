function workout(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let runFirstDay = Number(input[index]);
    index++;
    let previozDay = runFirstDay;
    let currentDay = 0;
    let runTotalKm = runFirstDay;

    for (let i = 0; i < days ; i++) {
       

        let procenEveryDay = Number(input[index]);
        index++
        currentDay = previozDay + previozDay * procenEveryDay / 100;
        runTotalKm += currentDay;
        previozDay = currentDay;
    }
    if (runTotalKm >=1000) {
        console.log (`You've done a great job running ${Math.ceil(runTotalKm - 1000)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${ Math.ceil(1000 - runTotalKm)} more kilometers`);
    }
}

workout


    (["4",
"100",
"30",
"50",
"60",
"80"])

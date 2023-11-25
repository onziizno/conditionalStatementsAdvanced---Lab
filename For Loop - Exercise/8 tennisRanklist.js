function tennisRanklist(input) {
    let index = 0;
    let countTournaments = Number(input[index]);
    index++;
    let points = Number(input[index]);
    index++;

    let countFirstPlace = 0;
    let countSecondPlace = 0;
    let countThirthPlace = 0;

    for (let x = 0; x < countTournaments; x++) {
        let tournamentPlace = input[index];
        index++;

        if (tournamentPlace === "W") {
            countFirstPlace++;
        } else if (tournamentPlace === "F") {
            countSecondPlace++;
        } else {
            countThirthPlace++;
        }

    }
    let finalPoints = points + countFirstPlace * 2000 + countSecondPlace * 1200 + countThirthPlace * 720;
    let averagePoint = (finalPoints - points) / countTournaments;
    let precentWin = (countFirstPlace / countTournaments) * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoint)}`)
    console.log(`${precentWin.toFixed(2)}%`);
}

tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])



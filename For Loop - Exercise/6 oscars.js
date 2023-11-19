function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;
    let isNominee = false;

    for (let i = 0; i < n; n++) {
        let jName = String(input[index]);
        index++;
        let currenPoints = Number(input[index]);
        index++;
        currenPoints = jName.length * currenPoints / 2;
        points += currenPoints;

        if (points > 1250.5) {
            isNominee = true;
            break;
        }


    }
    if (isNominee) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        let diff = 1250.5 - points;
        
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])






function minNumber(input) {
    index = 0;
    let comand = input[index]
    index++;

    let min = Number.MAX_SAFE_INTEGER;

    while (comand !== 'Stop') {
        let num = Number(comand);
        if (num < min) {
            min = num;
        }
        comand = input[index];
        index++;
    
}
console.log(min)
}

minNumber(["45",
    "-20",
    "7",
    "-99",
    "Stop"])

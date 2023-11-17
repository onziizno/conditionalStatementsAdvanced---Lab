function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magickNumber = Number(input[2]);

    let combinationCounter = 0;

    let isfound = false;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            let sum = a + b;
            combinationCounter++;
            if (sum === magickNumber) {
                console.log(`Combination N: ${combinationCounter} (${a} + ${b} = ${magickNumber})`)

                isfound = true;
                break;
            }

        }
        if (isfound) {
            break;
        }
    }

    if (!isfound) {
        console.log(`${combinationCounter} combinations - neither equals ${magickNumber}`);
    }
}

sumOfTwoNumbers(["88", 
"888", 
"2000"])



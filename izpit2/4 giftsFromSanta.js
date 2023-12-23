function giftsFromSanta(input) {
    let numN = Number(input[0]);
    let numM = Number(input[1]);
    let numS = Number(input[2]);

    let buffer = "";

    for (let i = numM; i >= numN; i--) {

        if (i % 2 == 0 && i % 3 == 0) {
            if (i === numS) {
                break;
            }
            buffer += "" + i + " ";
        }


    }
    console.log(buffer);
}

giftsFromSanta(["1",
"36",
"12"])


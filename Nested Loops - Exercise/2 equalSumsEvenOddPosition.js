function equalSumsEvenOddPosition(input) {


    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    for (let i = firstNum; i <= secondNum; i++) {

        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            console.log(currentDigit);
        }
    }


}

equalSumsEvenOddPosition(["100000",
    "100050"])

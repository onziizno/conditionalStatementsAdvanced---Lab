function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let term = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let allIntereRate = depositSum * annualInterestRate / 100
    let mounthInterestRate = allIntereRate / 12

    let sum = depositSum + term * mounthInterestRate;
    console.log(sum)

}

depositCalculator(["200 ", "3 ","5.7 "]) //depozirana suma
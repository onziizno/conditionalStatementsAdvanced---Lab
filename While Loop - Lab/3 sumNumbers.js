function sumNumbers(input) {

    let index = 0;
    let target = Number(input[index]);
    index++;
    
    sum = 0;


    while (true) {
        if (target <= sum) {
                break;
        }
        let n = Number(input[index]);
        index++;
        sum += n;
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])


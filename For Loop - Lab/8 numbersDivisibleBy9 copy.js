function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let stop = Number(input[1]);
    let sum = 0;
    let buffer = "";


    for (let i = start; i <= stop; i++) {
        if (i % 9 == 0) {
            
            buffer += i + "\n";
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buffer);
  
}

numbersDivisibleBy9(["100", "200"])
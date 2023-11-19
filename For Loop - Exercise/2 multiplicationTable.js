function multiplicationTable(input) {
    let num = Number(input[0]);

    for ( let x = 1; x <=10; x++) {
        let sum = x * num;
        console.log(`${x} * ${num} = ${sum}`);
    }

}

multiplicationTable(["8"])
function passwordGuess(input) {
    let leter = input[0];

    if (leter === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }

}

passwordGuess(["s3cr3t!ssw0rd"])
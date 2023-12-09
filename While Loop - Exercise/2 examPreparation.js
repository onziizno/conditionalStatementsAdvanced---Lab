
function examPreparation(input) {
    let index = 0;
    let countOfBadGrades = Number(input[index]);
    index++;

    let numberOfProblems = 0;
    let totalGrades = 0;
    let badGrades = 0;
    let nameOfProblem = "";
    let command = input[index];
    index++;

    while (command !== "Enough") {
        nameOfProblem = command;
        command = input[index];
        index++;
        let currentGrade = Number(command);
        numberOfProblems++;
        totalGrades += currentGrade;
        if (currentGrade <= 4.0) {
            badGrades++;
            if (badGrades === countOfBadGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        command = input[index];
        index++;
    }
    let avgScore = (totalGrades /numberOfProblems).toFixed(2);
    if (command === "Enough") {
        console.log(`Average score: ${avgScore}`);
        console.log(`Number of problems:${numberOfProblems}`);
        console.log(`Last problem: ${nameOfProblem}`);
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])


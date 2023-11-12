function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let i = 1;
    let sumGrade = 0;
    let badGradeCouter = 0;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4) {
            badGradeCouter++;
            if ( badGradeCouter === 2) {
                console.log(i);
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;
    }
    let avg = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avg}`);
    console.log(`${name} has been excluded at ${i} grade`);
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



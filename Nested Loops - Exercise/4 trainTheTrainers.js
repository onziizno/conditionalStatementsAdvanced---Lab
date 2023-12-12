function trainTheTrainers(input) {
    let numberOfJudges = Number(input[0]);
    let presentationName = input[1];
   
    let index = 2;
    let grade = input[index];
    let SumGrade = 0;
    let numberGrades = 0;
  let avgGradeCount = 0;
  let allGradeSum = 0;
   
   
   
   
      
      for (let j = 1; j <= input.length; j += numberOfJudges+1) {
          presentationName = input[j];
          if(presentationName ==="Finish"){
              break;
          }
      for (index; index <= input.length - 1; index++) {
        grade = Number(input[index]);
        numberGrades++;
        SumGrade += grade;
        let avgGrade = SumGrade / numberGrades;
        if (numberGrades >= numberOfJudges) {
          console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);
          avgGradeCount++
          allGradeSum += avgGrade
          index+=2
          SumGrade = 0;
          numberGrades = 0;
          break;
        }
   
         }
      }
      let allGradeAvg = allGradeSum / avgGradeCount
    console.log(`Student's final assessment is ${allGradeAvg.toFixed(2)}.`);
  }

  trainTheTrainers(["3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish"])
  
function projectsCreation(input) {
    /*
     Вход
От конзолата се четат 2 реда:
1.	Името на архитекта - текст
2.	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
Изход
На конзолата се отпечатва:
•	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
     */
 let architectName = input[0];
 let projectNumber = Number(input[1]);
 let timeToFinishProject = projectNumber * 3;


 console.log(`The architect ${architectName} will need ${timeToFinishProject} hours to complete ${projectNumber} project/s.`)

}

projectsCreation(["George", "4"])
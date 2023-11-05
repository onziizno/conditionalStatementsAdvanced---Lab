function onTimeForTheExam(input) {
    let examHours = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalExamMin = examHours * 60 + examMin;
    let totalArrivalMin = arrivalHours * 60 + arrivalMin;

    let hours = 0;
    let minutes = 0;

    if (totalExamMin - totalArrivalMin > 30) {
        console.log('Early');
        time = totalExamMin - totalArrivalMin;
        minutes = time % 60;
        hours = Math.floor(time / 60);
        if (hours<=0) {
            console.log(`${minutes} minutes before the start`);
        } else {
            console.log(`${hours}:${minutes.toString(2,'0')} hours before the start`);
        }
    }else if (totalExamMin - totalArrivalMin >= 0){
        console.log('On time');
        time = totalExamMin - totalArrivalMin;
        minutes = time % 60;
        hours = Math.floor(time / 60);
        if (totalExamMin !== totalArrivalMin) {
            console.log(`${minutes} minutes before the start`)
        } else {
            console.log('Late');
            time = totalArrivalMin - totalExamMin;
        hours = Math.floor(time / 60);
        minutes = time % 60;
            if (hours <=0) {
                console.log(`0${minutes} minutes after the start`); 
            } else {
                console.log(`${hours}:${minutes.toString(2,'0')} hours after the start`)
            }
        }
    }


}
onTimeForTheExam(["11",
    "30",
    "15",
    "55"])


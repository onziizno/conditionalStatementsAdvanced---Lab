function onTimeForTheExam(input) {
    let examHours = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalExamMin = examHours * 60 + examMin;
    let totalArrivalMin = arrivalHours * 60 + arrivalMin;

    if (totalArrivalMin > totalExamMin) {
        time = totalArrivalMin - totalExamMin;
        hours = Math.floor(time / 60);
        minutes = time % 60;

        if ((time) >= 60) {
            if (minutes < 10) {
                console.log('Late');
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log('Late');
                console.log(`${hours}:${minutes} hours after the start`);
            }
        } else {

            if (minutes < 10) {
                console.log('Late');
                console.log(`0${minutes} minutes after the start`);
            } else {
                console.log('Late');
                console.log(`${minutes} minutes after the start`);
            }

        }

    } else if (totalExamMin >= totalArrivalMin) {
        time = totalExamMin - totalArrivalMin;
        minutes = time % 60;
        hours = Math.floor(time / 60);
        if (time >= 60) { 

                if (hours > 0 && minutes < 10) {
                    console.log(`Early`);
                    console.log(`${hours}:0${minutes} hours before the start`);
                } else {
                    console.log(`Early`);
                    console.log(`${hours}:${minutes} hours before the start`);
                }
            }
        }
        if ((time) > 30) {
            if (hours = 0 && minutes != 0 && minutes < 60) {
                console.log(`Early`);
                console.log(`${minutes} minutes before the start`);
            }
        if ((time) <= 30) {
            if (time = 0) {
                console.log('On time');
            } else if (minutes < 10) {
                console.log('On time');
                console.log(`0${minutes} minutes before the start`);
            } else {
                console.log('On time');
                console.log(`${minutes} minutes before the start`);
            }
        } 
        
        
    }
}

onTimeForTheExam(["11",
    "30",
    "15",
    "55"])


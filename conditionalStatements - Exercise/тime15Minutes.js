function тime15Minutes (input) {
    let hours = Number (input[0]);
    let minutes = Number (input[1]);
    let minutes15 = minutes +15;


    if (minutes15 >=60) {
        minutes15 = minutes15 - 60;
        hours = hours + 1;
    }

    if ( hours === 24) {
        hours = 0;
        }

        if ( minutes15 < 10) {
            console.log(`${hours}:0${minutes15}`)
        } else {
            console.log(`${hours}:${minutes15}`)
        }
    
}

тime15Minutes (["23", "46"])
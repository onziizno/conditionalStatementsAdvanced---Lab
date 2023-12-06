function skiTrip(input) {

    let dayToStay = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];
    let nightToStay = dayToStay - 1;

    let finalPrice = 0;
debugger
    switch (typeOfRoom) {
        case 'room for one person':
            finalPrice = 18 * nightToStay;
            break;
        case 'apartment':
            finalPrice = 25 * nightToStay;
            if (nightToStay < 10) {
                finalPrice = finalPrice * 0.70;
            } else if (nightToStay >= 10 && nightToStay <= 15) {
                finalPrice = finalPrice * 0.65;
            }else {
                finalPrice = finalPrice * 0.50;
            }
            break;
        case 'president apartment':
            finalPrice = 35 * nightToStay;
            if (nightToStay < 10) {
                finalPrice = finalPrice * 0.90;
            } else if (nightToStay >= 10 && nightToStay <= 15) {
                finalPrice = finalPrice * 0.85;
            }else {
                finalPrice = finalPrice * 0.80;
            }
            break;
            
    }
    if ( rating === 'positive') {
        finalPrice = finalPrice + finalPrice * 0.25;
    } else {
        finalPrice = finalPrice - finalPrice * 0.10;
    }

    console.log(finalPrice.toFixed(2))
}

skiTrip(["2",
"apartment",
"positive"])




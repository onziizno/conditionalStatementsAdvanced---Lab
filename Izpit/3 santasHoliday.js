function santasHoliday(input) {
    let dayOfStay = Number(input[0]);
    let room = input[1];
    let ocenka = input[2];

    let priceRoomForOnePerson = 0;
    let priceApartament = 0;
    let pricePresidentApartament = 0;

    let nightOfStay = dayOfStay - 1;

    if (dayOfStay < 10) {
        priceRoomForOnePerson = 18 * nightOfStay;
        priceApartament = (25 * nightOfStay) * 0.70;
        pricePresidentApartament = (35 * nightOfStay) * 0.90;

    } else if (dayOfStay >= 10 && dayOfStay <= 15) {
        priceRoomForOnePerson = 18 * nightOfStay;
        priceApartament = (25 * nightOfStay) * 0.65;
        pricePresidentApartament = (35 * nightOfStay) * 0.85;
    } else {
        priceRoomForOnePerson = 18 * nightOfStay;
        priceApartament = (25 * nightOfStay) * 0.50;
        pricePresidentApartament = (35 * nightOfStay) * 0.80;
    }
    if (ocenka === "positive") {
        if (room === "room for one person") {
            console.log((priceRoomForOnePerson * 1.25).toFixed(2));
        } else if (room === "apartment") {
            console.log((priceApartament * 1.25).toFixed(2));
        } else {
            console.log((pricePresidentApartament * 1.25).toFixed(2));
        }
    } else if (ocenka === "negative") {
        if (room === "room for one person") {
            console.log((priceRoomForOnePerson * 0.9).toFixed(2));
        } else if (room === "apartment") {
            console.log((priceApartament * 0.9).toFixed(2));
        } else {
            console.log((pricePresidentApartament * 0.9).toFixed(2));
        }
    }
}
santasHoliday(["30",
    "president apartment",
    "negative"])




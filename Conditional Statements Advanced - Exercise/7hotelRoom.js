function hotelRoom(input) {
    let month = input[0];
    let numOfNight = Number(input[1]);
    let apartament = 0;
    let studio = 0;

    /**
     Май и октомври	        Юни и септември	                Юли и август
    Студио – 50 лв./нощувка	    Студио – 75.20 лв./нощувка	    Студио – 76 лв./нощувка
    Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
    
    Предлагат се и следните отстъпки:
    •	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
    •	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
    •	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
    •	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
    Вход
    Получават се 2 аргумента:
    •	 месецът – May, June, July, August, September или October
    •	броят на нощувките – цяло число в интервала [0 … 200]
    Изход
    Да се отпечатат на конзолата 2 реда:
    •	На първия ред: “Apartment: {цена за целият престой} lv.”
    •	На втория ред: “Studio: {цена за целият престой} lv.”
    
     */
    if (month === 'May' || month === 'October') {
        apartament = 65 * numOfNight;
        studio = 50 * numOfNight;

        if (numOfNight > 7 && numOfNight <=14) {
            studio = studio * 0.95;
        } else if (numOfNight > 14) {
            studio = studio * 0.70;
        }
    } else if (month === 'June' || month === 'September') {
        apartament = 68.70 * numOfNight;
        studio = 75.20 * numOfNight;

        if (numOfNight > 14) {
            studio = studio * 0.80;
        }
    } else {
        apartament = 77 * numOfNight;
        studio = 76 * numOfNight;
    }

    if (numOfNight > 14) {
        apartament = apartament * .90;
    }

    console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

hotelRoom(["May",
    "15"])

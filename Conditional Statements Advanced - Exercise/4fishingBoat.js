function fishingBoat(input) {
    let budget = Number(input[0]);
    let seasons = input[1];
    let fisherMen = Number(input[2]);

    let rentalPrice = 0;

    //•	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"

    if (seasons === 'Spring') {
        rentalPrice = 3000;
    } else if (seasons === 'Summer' || seasons === 'Autumn') {
        rentalPrice = 4200;
    } else {
        rentalPrice = 2600;
    }

    if (fisherMen <= 6) {
        rentalPrice = rentalPrice * 0.90;
    } else if (fisherMen >= 7 && fisherMen <= 11) {
        rentalPrice = rentalPrice * 0.85;
    } else {
        rentalPrice = rentalPrice * 0.75;
    }

    if (fisherMen % 2 === 0 && seasons !== 'Autumn') {
        rentalPrice = rentalPrice * 0.95;
    }

    if (rentalPrice < budget) {
        console.log(`Yes! You have ${(budget - rentalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rentalPrice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000",
    "Summer",
    "11"])

function journey(input) {

    let budget = Number(input[0]);
    let seasons = input[1];

    let destination = '';
    let rentalPrice = 0;
    let place = '';


    if (budget <= 100) {
        destination = 'Bulgaria';

        if (seasons === 'summer') {
            rentalPrice = budget * 0.30;
            place = 'Camp';
        } else {
            rentalPrice = budget * 0.70;
            place = 'Hotel'
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';

        if (seasons === 'summer') {
            rentalPrice = budget * 0.40;
            place = 'Camp';
        } else {
            rentalPrice = budget * 0.80;
            place = 'Hotel';
        }
    } else {
        destination = 'Europe';
        rentalPrice = budget * 0.90;
        place = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${rentalPrice.toFixed(2)}`)
}






journey(["1500", "summer"])
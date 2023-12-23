function computerRoom(input) {
    let month = input[0];
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let timeOfDay = input[3];

    let pricePerHours = 0;


    
    if (month === 'march' && timeOfDay === 'day') {
        pricePerHours = 10.50;

        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'april' && timeOfDay === 'day') {
        pricePerHours = 10.50;

        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'may' && timeOfDay === 'day') {
        pricePerHours = 10.50;

        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'march' && timeOfDay === 'night') {
        pricePerHours = 8.40;

        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'april' && timeOfDay === 'night') {
        pricePerHours = 8.40;

        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'may' && timeOfDay === 'night') {
        pricePerHours = 8.40;

        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'june' && timeOfDay === 'day') {
        pricePerHours = 12.60
        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'july' &&  timeOfDay === 'day') {
        pricePerHours = 12.60
        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === "august" && timeOfDay === 'day') {
        pricePerHours = 12.60
        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'june' && timeOfDay === 'night') {
        pricePerHours = 10.20;
        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if (month === 'july' &&  timeOfDay === 'night') {
        pricePerHours = 10.20;
        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }
    if ( month === "august" || timeOfDay === 'night') {
        pricePerHours = 10.20;
        if (people >= 4) {
            pricePerHours = pricePerHours * 0.90;
        }
        if (hours >= 5) {
            pricePerHours = pricePerHours * 0.5;
        }
    }

    


    let totalprice = (pricePerHours * people) * hours;
    console.log(`Price per person for one hour: ${pricePerHours.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalprice.toFixed(2)}`);

}

computerRoom(["may",
"3",
"3",
"night"])

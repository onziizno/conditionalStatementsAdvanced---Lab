function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = 0;
    let shoes = 0;

    if (degrees >=10 && degrees<=18) {
        if ( timeOfDay ==='Morning') {
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'
        }
    }console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}

summerOutfit(["16",
"Morning"])

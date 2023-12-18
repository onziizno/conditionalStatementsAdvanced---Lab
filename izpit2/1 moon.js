function moon(input) {
    let speed = Number(input[0]);
    let fuelPer100Km = Number(input[1]);
    let timeToStay = 3;

    let distansEartMoon = 384400;
    let totalDistans = distansEartMoon * 2;
    let timeToTravel = Math.ceil(totalDistans / speed);
    let totalTime = timeToTravel + timeToStay;
    let fuelConsumation = (fuelPer100Km * totalDistans) / 100;

    console.log(totalTime);
    console.log(fuelConsumation);

}

moon(["5000",
    "7"])

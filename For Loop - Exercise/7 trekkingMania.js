function trekkingMania(input) {
    let index = 0;

    let groups = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    let totalPeopleCount = 0;

    for (let x = 0; x < groups; x++) {
        let countPeople = Number(input[index]);
        index++;

        if (countPeople <= 5) {
            p1Counter += countPeople;
            totalPeopleCount += countPeople;
        } else if (countPeople > 5 && countPeople <= 12) {
            p2Counter += countPeople;
            totalPeopleCount += countPeople;
        } else if (countPeople > 12 && countPeople <= 25) {
            p3Counter += countPeople;
            totalPeopleCount += countPeople;
        } else if (countPeople > 25 && countPeople <= 40) {
            p4Counter += countPeople;
            totalPeopleCount += countPeople;
        } else {
            p5Counter += countPeople;
            totalPeopleCount += countPeople;
        }

    }
    let p1Precent = p1Counter / totalPeopleCount * 100;
    let p2Precent = p2Counter / totalPeopleCount * 100;
    let p3Precent = p3Counter / totalPeopleCount * 100;
    let p4Precent = p4Counter / totalPeopleCount * 100;
    let p5Precent = p5Counter / totalPeopleCount * 100;

    console.log(p1Precent.toFixed(2) + "%");
    console.log(p2Precent.toFixed(2) + "%");
    console.log(p3Precent.toFixed(2) + "%");
    console.log(p4Precent.toFixed(2) + "%");
    console.log(p5Precent.toFixed(2) + "%");
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])


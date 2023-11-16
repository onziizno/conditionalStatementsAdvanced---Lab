function clock(input) {
    let h = 0;
    let min = 0;
    for (let h = 0; h <= 23; h++) {
        for (let min = 0; min <= 59; min++) {

            console.log(`${h}:${min}`)

        }
    }
}

clock()
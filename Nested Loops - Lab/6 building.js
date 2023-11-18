function building(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let x = floor; x > 0; x--) {
        let buffer = ""
        for (let y = 0; y < rooms; y++) {
            if (x === floor) {
                buffer += `L${x}${y} `;
                
            } else if (x % 2 === 0) {
                buffer += `O${x}${y} `;
            } else {
                buffer += `A${x}${y} `;
            }
        }
        console.log(buffer);
    }
}



building(["1", "5"])
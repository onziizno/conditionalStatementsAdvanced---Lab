function histogram(input) {
    let index = 0;

    let n = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let y = 0; y < n; y++) {
        let x = Number(input[index])
        index++;
        if (x < 200) {
            p1Counter++;
        } else if (x >= 200 && x < 400) {
            p2Counter++;
        } else if (x >= 400 && x < 600) {
            p3Counter++;
        } else if (x >= 600 && x < 800) {
            p4Counter++;
        } else {
            p5Counter++;
        }

       
    }
    let p1Precent = p1Counter/n *100;
    let p2Precent = p2Counter/n *100;
    let p3Precent = p3Counter/n *100;
    let p4Precent = p4Counter/n *100;
    let p5Precent = p5Counter/n *100;

 console.log(p1Precent.toFixed(2) + "%");
 console.log(p2Precent.toFixed(2) + "%");
 console.log(p3Precent.toFixed(2) + "%");
 console.log(p4Precent.toFixed(2) + "%");
 console.log(p5Precent.toFixed(2) + "%");
        

}

histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])


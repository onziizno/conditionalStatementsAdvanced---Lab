function workingHours(input) {
let time = Number(input[0]);
let day = input[1];

if (time<=18 || time >=10 ) {
    if (day === 'Monday') {
        console.log('open')
    }
} else {
    console.log ('closed')
}

}

workingHours(["7",
"M0nday"])

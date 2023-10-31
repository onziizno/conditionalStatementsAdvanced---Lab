function workingHours(input) {
let time = Number(input[0]);
let day = input[1];

/**
 ase 1: console.log('Monday');break;
        case 2: console.log('Tuesday');break;
        case 3: console.log('Wednesday');break;
        case 4: console.log('Thursday');break;
        case 5: console.log('Friday');break;
        case 6: console.log('Saturday');break;
        case 7: console.log('Sunday');break;
        default: console.log('Error');break;
 */


if (time >=10 && time <=18 ) {
    if (day === 'Monday'|| day === "Tuesday" || day === 'Wednesday' || day ==='Thursday' || day === 'Friday' || day === 'Saturday') {
        console.log ( 'open');
    } else {
        console.log ('closed');
    }
    
} else {
    console.log ('closed');
}

}

workingHours(["12",
"Monay"])

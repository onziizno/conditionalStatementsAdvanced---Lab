function cinemaTicket(input) {
/**
 ('Monday');break;
        case 2: console.log('Tuesday');break;
        case 3: console.log('Wednesday');break;
        case 4: console.log('Thursday');break;
        case 5: console.log('Friday');break;
        case 6: console.log('Saturday');break;
        case 7: console.log('Sunday');break;
        default: console.log('Error');break;
 */

    let day = input[0];

if ( day === 'Monday' || day === 'Tuesday' || day === 'Friday') {
    console.log(12);
} else if ( day === 'Wednesday' || day === 'Thursday') {
    console.log (14);
} else {
    console.log (16);
}

}

cinemaTicket(["Friday"])
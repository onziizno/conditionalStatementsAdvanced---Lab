function vacationBooksList(input) {
    let page = Number(input[0]);
    let pagePerMin = Number(input[1]);
    let days = Number(input[2]);

    let hourToReadAllBook = page / pagePerMin; // komentar
    let hoursnaden = hourToReadAllBook / days;


    console.log(hoursnaden)
}
/****
sad
aadsa

dad

*/
vacationBooksList(["212", "20", "2"])
function oldBooks(input) {
let index = 0;
let searchBook = input[index];
index++;
let data = input[index];
let bookCounter = 0;

while (true) {
    data = input[index];
    index++;
    if (data === searchBook) {
        console.log(`You checked ${bookCounter} books and found it.`);
        break;
    } else if ( data === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
        break;
    }
    bookCounter++;
   
}

}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


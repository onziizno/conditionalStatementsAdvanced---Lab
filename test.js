function test(input) {
let product = input [0];
let town = input [1];
let quantity = Number(input[2]);
sum = 0.00
 debugger
if (town === "Varna") {
    if (product === "coffe") {
        sum = quantity * 1.2;
    } else if (product === "beer") {
        sum = quantity * 3.2;
    } else {
        sum = quantity * 9.01;
    }
}
console.log(sum)
}

test (["ber" , "Varna" , "2" ])
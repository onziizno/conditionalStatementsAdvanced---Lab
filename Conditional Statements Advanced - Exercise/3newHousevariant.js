function newHouse(input) {
    let flowers = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);
    let bill = 0.00;
    //•	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    
    switch (flowers) {
        case 'Roses':
        bill = num * 5.00;

        if ( num >80) {
            bill = bill*0.9;
        }
        break;
        case 'Dahlias': bill = num * 3.80;
        if (num >90) {
            bill = bill * 0.85;
        }
        break;
        case 'Tulips': {
            bill = num * 2.80; 

        if (num >80) {
            bill = bill * 0.85;
            }
        }
        break;
        case 'Narcissus': {
            bill = num * 3.00;

            if ( num <120) {
                bill = bill * 1.15;
            }
        }
        break;
        case 'Gladiolus': {
            bill = num * 2.50;
            
            if ( num <80 ) {
                bill = bill * 1.20;
            }
        }
}





if (bill > budget) {
    console.log(`Not enough money, you need ${(bill - budget).toFixed(2)} leva more.`)
} else {
    console.log(`Hey, you have a great garden with ${num} ${flowers} and ${(budget - bill).toFixed(2)} leva left.`)
}
}
newHouse(["Narcissus",
"119",
"360"])



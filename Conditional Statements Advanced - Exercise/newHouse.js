function newHouse(input) {
    let flowers = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);
    let bill = 0.00;
   
    if (flowers === 'Roses') {
       if( num < 80) {
        bill = num * 5;
    } else  {
        bill = (num * 5) - (num * 5)*0.1;
    }
    } else if (flowers === 'Dahlias') {
        if ( num <90) {
            bill = num * 3.80;
        } else {
            bill = (num * 3.8) - (num * 3.8)*0.15; 
        }
    } else if (flowers === 'Tulips') {
        if (num <80) {
            bill = num *2.8;
        } else {
            bill = (num * 2.8) - (num * 2.8)*0.15; 
        }
    } else if ( flowers === 'Narcissus') {
        if (num >= 120 ) {
            bill = num * 3;
        } else  {
            bill = (num * 3) + (num * 3)*0.15;  
        }
    } else if ( flowers === 'Gladiolus') {
        if (num >= 80) {
            bill = num *2.5;
        }else {
            bill = (num * 2.5) + (num * 2.5)*0.20; 
        }
    } if(bill > budget) {
        console.log(`Not enough money, you need ${(bill - budget).toFixed(2)} leva more.`)
    } else  {
        console.log(`Hey, you have a great garden with ${num} ${flowers} and ${(budget-bill).toFixed(2)} leva left.`)
    }
}
newHouse(["Gladiolus",
"200",
"160"])

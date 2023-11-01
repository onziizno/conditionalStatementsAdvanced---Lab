function cinema(input) {
    let projectiontype = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);
     let income = 0;

    if ( projectiontype ==='Premiere') {
        income = row * column * 12;
    } else if ( projectiontype === 'Normal') {
        income = row * column * 7.50;
    } else if (projectiontype === 'Discount') {
        income = row * column *5;
    } console.log(`${income.toFixed(2)} leva`);



}

cinema(["Premiere",
"10",
"12"])

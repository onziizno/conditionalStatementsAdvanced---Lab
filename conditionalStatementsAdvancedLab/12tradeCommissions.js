function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let tradecomissions = 0.00;

    if (town === 'Sofia') {
        if (sales >= 0 && sales <=500) {
            tradecomissions = sales * 0.05;
        } else if ( sales >500 && sales <= 1000) {
            tradecomissions = sales * 0.07;
        } else if ( sales >1000 && sales <=10000) {
            tradecomissions = sales * 0.08;
        } else if ( sales>10000) {
            tradecomissions = sales * 0.12;
        } 
        console.log ( tradecomissions.toFixed(2));
    } else if (town ==='Varna') {
        if   (sales >= 0 && sales <=500) {
            tradecomissions = sales * 0.045;
        } else if ( sales >500 && sales <= 1000) {
            tradecomissions = sales * 0.075;
        } else if ( sales >1000 && sales <=10000) {
            tradecomissions = sales * 0.10;
        } else if ( sales>10000) {
            tradecomissions = sales * 0.13;
        } 
        console.log ( tradecomissions.toFixed(2));
    } else if ( town === 'Plovdiv') {
        if (sales >= 0 && sales <=500) {
            tradecomissions = sales * 0.055;
        } else if ( sales >500 && sales <= 1000) {
            tradecomissions = sales * 0.08;
        } else if ( sales >1000 && sales <=10000) {
            tradecomissions = sales * 0.12;
        } else if ( sales>10000) {
            tradecomissions = sales * 0.145;
        } 
        console.log ( tradecomissions.toFixed(2));
    }else {
        console.log('error')
    }
    
}

tradeCommissions(["Sofia",
"1500"])

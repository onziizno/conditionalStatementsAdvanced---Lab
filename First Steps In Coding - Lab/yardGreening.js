function yardCreening(input) {
    let plotGarden = Number (input[0]);
    let totalprice = plotGarden * 7.61;
    let diskount = totalprice - (totalprice * 0.18);
    let priceDiscount = totalprice * 0.18;

console.log (`The final price is: ${diskount} lv.`);
console.log (`The discount is: ${priceDiscount} lv.`)
}

yardCreening(["550"])
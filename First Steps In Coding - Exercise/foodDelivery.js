function foodDelivery(input) {
    let chikenMenu = Number (input[0]);
    let fishMenu = Number (input[1]);
    let veganMenu = Number (input[2]);
    let delivery = 2.5

    let priceWithoutDeliveryAndDessert = Number (chikenMenu * 10.35 + fishMenu * 12.4 + veganMenu * 8.15)

    let dessertPrice = priceWithoutDeliveryAndDessert * 0.2
    let totalPrice = priceWithoutDeliveryAndDessert + delivery + dessertPrice

    console.log(totalPrice)

}

foodDelivery(["2 ",
"4 ",
"3 "]
)
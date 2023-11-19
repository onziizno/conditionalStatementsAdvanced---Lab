function petShop(input) {
    // zoomagazin
        let bagFoodForDogs = Number(input[0]);
        let bagFoodForCats = Number(input[1]);
        let priceDogFood = bagFoodForDogs * 2.5;
        let priceCatFood = bagFoodForCats * 4;
    
        let totalPtice = priceDogFood + priceCatFood
    
        console.log(` ${totalPtice} lv.` )
}
petShop(["5 ",
"4 "]
)
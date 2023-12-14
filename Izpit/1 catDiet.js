function catDiet(input) {
    let maznini = Number(input[0]);
    let proteins = Number(input[1]);
    let vaglehidrati = Number(input[2]);
    let totalCallories = Number(input[3]);
    let precentWater = Number(input[4]);

    mazniniInFood = (totalCallories * maznini / 100) / 9;
    proteinsInFood = (totalCallories * proteins / 100) / 4;
    vaglehidratiInFoods = (totalCallories * vaglehidrati / 100) / 4;

    totalFood = mazniniInFood + proteinsInFood + vaglehidratiInFoods;
    caloriesPerGramFood = totalCallories / totalFood;
    calories = (caloriesPerGramFood * (100 - precentWater) / 100).toFixed(4);

    console.log(calories);

}
catDiet(["20",
    "60",
    "20",
    "1800",
    "50"])



function godzillaVsKong(input) {
    /*
    Функцията получава 3 аргумента:
1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
2.	Брой на статистите – цяло число в интервала [1 … 500]
3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
Известно е, че:
•	Декорът за филма е на стойност 10% от бюджета. 
•	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
Изход
На конзолата трябва да се отпечатат два реда:
•	Ако  парите за декора и дрехите са повече от бюджета:
o	"Not enough money!"
o	"Wingard needs {парите недостигащи за филма} leva more."
•	Ако парите за декора и дрехите са по малко или равни на бюджета:
o	"Action!" 
o	"Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая.

Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете функция, 
която да изчисли, дали предвидените средства са достатъчни за снимането на филма. 
За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.

    
    */
    let budjetFilm = Number(input[0]);
    let statistcount = Number(input[1]);
    let priceClothesStatist = Number(input[2]);
    let pricedekor = budjetFilm * 0.1;
debugger    
    let totalPriceClouthesStatist = statistcount * priceClothesStatist;

    if (statistcount >=150) {
        totalPriceClouthesStatist = totalPriceClouthesStatist - totalPriceClouthesStatist * 0.1;
    }
    let pricedekorAndClothes = pricedekor + totalPriceClouthesStatist;
    
    if (pricedekorAndClothes>budjetFilm) {
        console.log("Not enough money!")
        console.log (`Wingard needs ${(pricedekorAndClothes-budjetFilm).toFixed (2)} leva more.`)
    } else if ( budjetFilm >= pricedekorAndClothes) {
        console.log ("Action!")
        console.log (`Wingard starts filming with ${(budjetFilm - pricedekorAndClothes).toFixed(2)} leva left.`)
    }

}

godzillaVsKong (["15437.62",
"186",
"57.99"])


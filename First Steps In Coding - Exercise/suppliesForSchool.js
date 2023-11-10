function suppliesForSchool(input) {
    let pen = Number(input[0]);
    let marker = Number(input[1]);
    let preparat = Number(input[2]);
    let namalenie = Number(input[3]);

    let sumPen = pen * 5.8;
    let sumMarker = marker * 7.2;
    let sumPreparat = preparat * 1.2

    let totalPrice = sumPen + sumMarker + sumPreparat;
    let finalPriceAfterDiskont = totalPrice - (totalPrice * namalenie / 100)

    console.log(finalPriceAfterDiskont)
}

suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)
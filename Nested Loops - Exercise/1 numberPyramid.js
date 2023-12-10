function numberOfPiramid(input) {
    let maxNum = Number(input[0]);
    let curNum = 1;
    let curRow = 1;
    let curRowNums = 0;
    let res = '';

    while (curNum <= maxNum) {
        if (curRowNums < curRow) {
            res += `${curNum} `
            curRowNums++;
        } else {
            res += `\n${curNum} `
            curRow++;
            curRowNums = 1;
        }
        curNum++;
    }

console.log(res);
}

numberOfPiramid (["15"])
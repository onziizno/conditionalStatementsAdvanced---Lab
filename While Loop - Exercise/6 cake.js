function cake(input) {
    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let totalSize = cakeLength * cakeWidth;
    let index = 2;
    let curPortion;
   
    while (index < input.length) {
      curPortion = input[index];
   
      if (curPortion !== "STOP") {
        curPortion = Number(curPortion);
        totalSize -= curPortion;
   
        if (totalSize < 0) {
          console.log(`No more cake left! You need ${Math.abs(totalSize)} pieces more.`);
          break;
        }
      } else if (curPortion === "STOP") {
        console.log(`${totalSize} pieces are left.`);
        break;
      }
   
      index++;
    }
  }
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

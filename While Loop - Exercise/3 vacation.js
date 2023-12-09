function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let spendOrSave = input[index];
    index++;
    let sumSpendOrSave = Number(input[index]);
    index++;
     
    let daysCnt = 0;
    let spendDays = 0;
     
     
    while (availableMoney < neededMoney) {            
        
        if(spendOrSave === "save") {
            availableMoney += sumSpendOrSave;
            spendDays = 0;
        } else if (spendOrSave === "spend" ) {
            availableMoney -= sumSpendOrSave;
            spendDays++;
        }
        if(availableMoney < 0) {
            availableMoney = 0;
        }
        daysCnt++;
        if(spendDays >= 5) {
            console.log("You can't save the money.");
            console.log(`${daysCnt}`);
            return;
        }
        
        
        spendOrSave = input[index];
        index++;
        sumSpendOrSave = Number(input[index]);
        index++;
     
    } console.log(`You saved the money for ${daysCnt} days.`);
     
     
     
    }

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
   let wrongPassCounter = 0;
    while (true) {
        let data = input[index];
        index++;
        if (data === password) {
            console.log(`Welcome ${username}!`);
            break;
        }
        wrongPassCounter++;
        if (wrongPassCounter < 3 ){
        console.log(`Wrong password !`);}else {
        console.log(`Resset Password`);
        break;
    } ;
    }
       


}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1324",
    "1324",
    "1324",
    "1234"])

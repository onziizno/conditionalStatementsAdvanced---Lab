function four(input) {
 
    let index = 0
    let numberDay = Number(input[index++])
    let kmFirstDay = Number(input[index++])
    let previousDay = kmFirstDay
    let currentDay = 0
    let tottalKm = kmFirstDay
    
    
 
    for (let i = 1; i <= numberDay + 1; i++) {
            if ( i === 1){
            continue;
        }  
        let percent = Number(input[index++])
 
           currentDay = previousDay + previousDay * percent / 100
           tottalKm += currentDay
           previousDay = currentDay
 
           
        }
        
 
        if ( tottalKm >= 1000){
            console.log(`You've done a great job running ${Math.ceil(tottalKm - 1000)} more kilometers!`)
        } else{
            console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - tottalKm)} more kilometers`)
        }
 
}
four (["5","30","10",
"15",
"20",
"5",
"12"])
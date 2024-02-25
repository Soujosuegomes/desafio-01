let heroi = "Kratos"
let xp = 2423

if(xp <= 1000){
      xp = "ferro"
        console.log(xp);
}else if(xp >= 1001 & xp <= 2000){
      xp = "bronze"
        console.log(xp)
}else if(xp >= 2001 & xp <= 5000){
      xp = "prata"
        console.log(xp)
}else if(xp >= 5001 & xp <= 7000){
      xp = "ouro"
        console.log(xp)

}else if(xp >= 7001 & xp <= 8000){
      xp = "platina"
        console.log(xp)
}else if(xp >= 8001 & xp <= 9000){
      xp = "ascendente"
        console.log(xp)
}else if(xp >= 9001 & xp <= 10000){
      xp = "imortal"
        console.log(xp)
}else{
      xp = "radiante"
        console.log(xp)
}

console.log("O herói de nome " + heroi + " está no nível: " + xp)
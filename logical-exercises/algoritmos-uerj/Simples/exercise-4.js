function quantCaixasAzulejo(width, heigth){
    let areaKitchen = (width * alt * 2) + (heigth * alt *2) 
    let numberBoxes = areaKitchen/ 1.5
    return numberBoxes
}

var x = quantCaixasAzulejo(5,12)
console.log("A quantidade de caixas de azueljo para se colocar nas paredes é: ", x)
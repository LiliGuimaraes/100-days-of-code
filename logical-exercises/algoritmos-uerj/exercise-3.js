function numberLamps(power, width, heigth){
    // meters
    let dimensionRoom = width * heigth * 18
    let totalLamps = (power / dimensionRoom) 
    return totalLamps

}

var x = numberLamps(36, 5, 4)
console.log("O numero de lampadas para iluminar esse cômodo são: ", x)
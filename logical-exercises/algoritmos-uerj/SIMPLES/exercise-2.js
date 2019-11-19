function Farenheit(){
    var converteFarenheit = (x - 32)/ 1.8
    return converteFarenheit
}

var x  = converteCelsius(23)
console.log('a conversao para Celsius é: ', x)


function Celcius(){
    var converteCelsius = (1.8 * x) - 32
    return converteCelsius
}

var y  = Celsius(33)
console.log('a conversao de Farenheit para Celsius é: ', y)

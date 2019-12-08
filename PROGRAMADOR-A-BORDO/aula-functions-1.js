// Como criar uma função que soma todos os itens de um array
function somaTudo(numeros){
    var total = 0;
    for(var num of numeros){
        total = total + num;
    }
    return total
}
var arrayNumeros = [1,2,3,4,5,6]
var resultado = somaTudo(arrayNumeros)
console.log('resultado de soma tudo',resultado)
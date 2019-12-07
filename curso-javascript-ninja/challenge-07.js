/*
Crie um array com 5 items (tipos variados).
*/

let arr = [
    'Arroz', 
    12, 
    function() {}, 
    {feijao: 'preto', linguica: true}, 
    [10, 5, 2]
];

console.log("Primeiro arr: ", arr)

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

var addItem = function(item){
    arr.push(item)
    return arr
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

let newArr = addItem(['Guiné',{'mar':'azul', 'areia': true}, 13, function AddNewItem(){},[21,34,82]])
console.log("Array depois de adicionar items: ", newArr)
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
let secondElement = newArr[5][1]
console.log("O segudo elemento, do segundo array, é: ", secondElement)
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr.length + " items")

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + newArr[5].length + " items")

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
count = 10;
while (count <= 20 ){
    count % 2 === 0 ? console.log("Os números pares são: ", count++) : count++
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
count = 10
while (count <= 20){
    count % 2 !== 0 ? console.log("Os números ímpares são: ", count++) : count++
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
*/

for(let i=100; i <= 120; i+=2){
    console.log(i)
}

// No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.

for(let i=111; i <= 125; i+=2){
    console.log("Os números ímpares entre 111 e 125 são: ", i)
}

/* PLUS TO BETTER UNDERSTAND MULTIDIMENSIONAL ARRAYS 
Iterating over arrays
*/

for (let itemArrayOne=0; itemArrayOne < arr.length-1; itemArrayOne++){
    console.log(" ' ' " + arr.length)
}

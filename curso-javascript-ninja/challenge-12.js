/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function() {
  /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

  var person = {
    name: "Giovani",
    lastname: "Duarte",
    age: 28
  };

  /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
  let ObjToArray = Object.keys(person);
  console.log(ObjToArray);
  /*
    Crie um array vazio chamado `books`.
    */

  let books = [];

  /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
  books.push({
    name: "Harumaki",
    pages: 201
  });

  books.push({
    name: "Intuitiving Eating",
    pages: 522
  });

  books.push({
    name: "Sprint",
    pages: 344
  });
  /*
    Mostre no console todos os livros.
*/
  console.log(books);
  /*
    Remova o último livro, e mostre-o no console.
    */
books.pop()
  /*
    Mostre no console os livros restantes.
    */
console.log("os livros restantes", books);  

/*
Converta os objetos que ficaram em `books` para strings.
Mostre os livros nesse formato no console:
*/
console.log("como strings",JSON.stringify(books))

/*
Converta os livros novamente para objeto.
*/

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log(typeof(books))

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
console.log("Usando of, necessário iterar com Object.Keys")
for(props of books){
    console.log(books[props])
}
console.log("\n")
console.log("Usando in ")
for(props in books){
    console.log(books[props])
}

console.log("\n")
console.log("Usando laço FOR simples ")

for(var i = 0, length = books.length; i < length; i++){
    for(var prop in books[i]){
        console.log(prop + ':', books[i][prop]);
    }
}
/*
Juntando todos os itens do array, mostre no console seu nome.
*/
var myName = ['L', 'I', 'L', 'I', 'A', 'N'];
console.log( '\nMeu nome é:', myName );
/*
Ainda usando o objeto acima, mostre no console "seu nome invertido".
*/
console.log(myName.join())
console.log("seu nome invertido é ",myName.reverse())
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log("ordenados alfabéticamente", myName.sort())
})();

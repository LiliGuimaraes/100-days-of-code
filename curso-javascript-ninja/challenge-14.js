/*
Envolva todo o código desse desafio em uma IIFE.
*/

(function() {
  /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */
  console.log("Number Objects Array:");
  var numberObjects = new Array();
  for (var i = 1; i <= 10; i++) {
    numberObjects.push({ number: i });
  }
  console.log(numberObjects);
  /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */
  console.log("\nJust Numbers:");
  var justNumbers = [];
  numberObjects.forEach(function(item) {
    justNumbers.push(item.number);
  });
  console.log(justNumbers);

  /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */
  console.log("\nJust module of division by 2 or 3:");
  var justMod2Or3 = justNumbers.filter(function(item) {
    return item % 2 === 0 || item % 3 === 0;
  });
  console.log(justMod2Or3);

  /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */

  console.log("\nOperation:");
  var operation = justMod2Or3.reduce(function(acumulado, atual) {
    return (acumulado + 1) * atual;
  }, 0);
  console.log(operation);

  /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */

  let operation2 = justMod2Or3.reduceRight(function(acc, curr) {
    return acc + 1 + curr;
  });
  console.log(
    "\nO mesmo reduce, começando do ultimo item para o primeiro é: ",
    operation2
  );

  /*
    Crie um array chamado `name`. 
    Cada elemento desse array deve ser uma sílaba do seu nome.
    Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    
    PS.: Lembra da língua do "P"? Não? 
    A língua do "P" é uma brincadeira infantil,
     onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */

  let name = ["li", "li", "an"];
  console.log(
    " \nBrincadeira do 'P' ",
    name.reduce(function(acc, curr) {
      return acc + "P" + curr;
    }),
    ""
  );
  /*
    Crie uma variável chamada `inversedName`, 
    que reduzirá o array em uma string e atribuirá o seu nome invertido (usando o array criado acima).
    */
  console.log(
    "\n InversedName joke",
    name.reduceRight(function(acc, curr) {
      return acc + curr;
    })
  );
  /*
    Mostre no console o array `numberObjects`.
    */

  /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */

  /*Isso acontece pois cada abjeto criado é alocado em um espaço diferente da memória */

  /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */

  /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
})();

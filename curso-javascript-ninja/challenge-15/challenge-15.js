/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

(function() {
  /*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, 
    mas ao invocá-lo iremos passar um único argumento,
    que é a quantidade de anos que devem ser adicionados à idade original (age).
    Esse método deverá retornar o objeto que será instanciado.
*/

  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function getFullName() {
      return this.name + " " + this.lastName;
    };

    this.getAge = function getAge() {
      return this.age;
    };

    this.addAge = function addAge() {
      this.age += arguments[0];
      return this;
    };
  }

  /*
Crie 3 novos objetos usando o construtor acima.
Os objetos serão novas pessoas.
As variáveis deverão ser o primeiro nome da pessoa.
 Passe os parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/

  console.log("Novas pessoas sendo criadas ...");
  var person_1 = new Person("Lilian", "Guimarães", 26);
  var person_2 = new Person("Juliane", "Guimarães", 28);
  var person_3 = new Person("Cláudio", "Guimarães", 30);

  console.log(person_1);
  console.log(person_2);
  console.log(person_3);

  /*
Mostre no console o nome completo de cada pessoa.
*/
console.log(person_1.getFullName())
console.log(person_2.getFullName())
console.log(person_3.getFullName())

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log(person_1.getFullName() + " tem " + person_1.getAge() + " anos.")
console.log(person_2.getFullName() + " tem " + person_2.getAge() + " anos.")
console.log(person_3.getFullName() + " tem " + person_3.getAge() + " anos.")

  /*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/

// ATENÇÃO:Como o método addAge retorno o próprio objeto, dá para encadear ele abaixo:  

console.log(person_1.getFullName() + " agora tem " + person_1.addAge(2).getAge() + " anos.")

  
})();

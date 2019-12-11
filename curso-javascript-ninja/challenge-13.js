/*
Envolva todo o código desse desafio em uma IIFE.
*/

(function() {
  /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
  let arr = [
    "Caçarola",
    "Pipoca",
    "Kitkat",
    "BalasToffer",
    "queijo",
    "pastaAmendoim",
    "IorguteGrego",
    "Banana",
    "CastanhaDeCaju",
    "Amendoim"
  ];
  let arrToString = JSON.stringify(arr);
  let arrToSTring_1 = arr.toString();
  console.log("Array em formato de string: ", arrToString);
  console.log("Array em formato de string_1: ", arrToSTring_1);
  console.log("\n");

  /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
  let sudeste = [
    "Minas Gerais",
    "São Paulo",
    "Rio de Janeiro",
    "Espiríto Santo"
  ];
  let sul = ["Rio Grande do Sul", "Santa Catarina", "Paraná"];
  /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */

  let brasil = sul.concat(sudeste);
  console.log("Concatenando strings: ", brasil);
  console.log("\n");

  /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */

  console.log("Adicionando estados da região Norte ao Brasil ...");
  brasil.unshift("Amazonas", "Pará", "Roraima");
  console.log("Brasil após add estados do Norte ...", brasil);
  console.log("\n");
  /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
  console.log("Remova o primeiro estado do Brasil", brasil.pop([0]));
  console.log("\n");
  /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
  let newSuL = brasil.slice(3, 6);
  console.log("Removendo o primeiro estado da lista Brasil", newSuL);
  console.log("\n");
  /*
    Mostre no console os estados que estão em `newSul`.
    */
  console.log("E agora Brasil fica ...", brasil.pop([0]));

  /*
    Mostre no console todos os estados que estão em `brasil`.
    */
  console.log(brasil);
  /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */

  let nordeste = [
    "Bahia",
    "Sergipe",
    "Piaui",
    "Pernambuco",
    "Ceará",
    "Tocantins",
    "Paraíba",
    "Rio Grande do Norte",
    "Alagoas"
  ];

  /*
    Mostre no console os estados do nordeste.
    */
  console.log("\n");
  console.log("Os estados da regiao Nordeste são: ", nordeste);

  /*
   Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
   ficar no mesmo nível que os estados já existentes, não em um array separado.
   */
  console.log("\n");
  brasil.concat(nordeste);
  console.log("Adicionando os estados do nordeste á lista Brasil ...", brasil);

  /*
    Mostre no console os estados em `newSudeste`.
    */

  /*
    Mostre no console os estados do `brasil`.
    */

  /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
  var newBrasil = [];
  brasil.forEach(function(item, index) {
    newBrasil.push({
      id: index,
      estado: item
    });
  });

  /*
    Mostre o array `newBrasil` no console
    */
   console.log("\n --- USANDO EVERY");
   console.log("O newBrasil se apresenta", newBrasil);
   
  /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */

    var every = brasil.every(
        function(item){
            return item.length > 7
        }
    )
console.log(every ? 'Sim, todos os estados tem mais do que 7 letras' : 'Nem todos os estados tem 7 letras')
  /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
var verifyIncluse = brasil.some(
    function(estado){
        return estado === 'Ceará'
    }
)

console.log("\n --- USANDO SOME")
console.log(verifyIncluse ? 'O Ceará está incluído' : 'O Ceará não está incluído')
  
/*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
*/

var addNewState = newBrasil.map(
    function(item, index){
        return{
            id: ++item.id,
            estado: item.estado + " pertece ao Brasil"
        }
    }
)
console.log("\n")
console.log("USANDO MAP -- SEMPRE ALTERA O OBJETO ---O NewBrasil agora com mais informações",addNewState)

/*
Filtre o array criado acima,
retornando somente os estados que tiverem ID par.
 Atribua o valor à uma variável chamada `filter`.
*/

var filter  = newBrasil.filter(function(estado){
    return estado.id % 2 === 0;
})
/*
Mostre o array filtrado acima no console.
*/
console.log("\n")
console.log("USANDO FILTER EM OBJETOS -- NUNCA ALTERA O OBJETO --- O NewBrasil com estados com id par",filter)

})();

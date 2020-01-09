/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

(function() {
  "use strict";

  /*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, 
com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."

Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."

E assim por diante, até a última.
*/
  var name = "Lilian";
  for (let letter = 0, length = name.length; letter < length; letter++) {
    console.log(
      name.charAt(letter) + " é a " + (letter + 1) + "ª letra do seu nome"
    );
  }

  /*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"

- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.

- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)

- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/

  var fullName = "lilian-cristina-guimarães-silva";
  // o split transforma em string

  fullName = fullName.split("-");
  fullName.forEach(function(item, index) {
    fullName[index] = item[0].toUpperCase() + item.substring(1);
  });

  console.log(fullName.join(" "));
  /*
    - Crie um array com 5 nomes. 
    Reduza esses nomes a uma única string, separando cada nome por vírgula.
    Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
  var nomes = ["Lilian, Yaso, Danielle, Sandra, Lauren"];
  console.log(nomes.length);

  let reduce = nomes
    .reduce(function(acc, curr, index) {
      let symbol = nomes.length - 1 === index ? " e " : " , ";
      return acc + symbol + curr;
    })
    .concat(" são alguns nomes aleatórios");
  console.log(reduce);

  /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
  console.log("\n'Roberto' agora é: ");
  console.log("Roberto".replace("to", "ta"));
  /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */

  /*
    Declare uma variável chamada `myName`, 
    que receba o seu primeiro nome, escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
  let myName = "Lilian";
  let newMyName = "";

  for (let letter = 0, length = myName.length; letter < length; letter++) {
    if (myName[0] === myName[0].toUpperCase()) {
      newMyName = newMyName.concat(
        letter % 2 === 0
          ? myName[letter].toUpperCase()
          : myName[letter].toLowerCase()
      );
    } else {
      newMyName = newMyName.concat(
        letter % 2 !== 0
          ? myName[letter].toUpperCase()
          : myName[letter].toLowerCase()
      );
    }
  }
  console.log(myName);
  console.log(newMyName);
})();

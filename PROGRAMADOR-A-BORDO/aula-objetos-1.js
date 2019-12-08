//
var usuario = {
  nome: "Ayrton",
  idade: 26,
  youtube: "Programador a Bordo",
  "ultim-nome": "Romanel",
  competencias: {
    linguagens: ["JavaScript", "Python", "Go", "Scala"],
    instrumentosmusicais: ["Guitarra", "Baixo", "Bateria"]
  }
};

console.log(usuario);
console.log(usuario.nome);
console.log(usuario.competencias.linguagens);

// Um objeto pode receber uma função

var usuario2 = {
  digaOi: function(name) {
    return `Olá ${name}`;
  }
};

console.log(usuario2.digaOi("Lilian"));

// Suponha que vc tenha o nome de uma variavel para uma cor

var cor = "Azul";
var idade = 16;
// E que voce queira usar essa variavel como propriedade ou valor de um objeto
// ATENÇÃO, para o ECMA2016: é possivel passar o valor e a chave com o mesmo nome nesses casos
var usuario3 = {
  nome: "Ayrton",
  cor,
  idade
};

console.log(usuario3.cor);
console.log(usuario3.idade);

// COMO FAZER MERGE DE UM OU MAIS  OBJETOS:

var usuario4 = {
  nome: "Ayrton",
  idade: 26
};

var extraInfo = {
  pais: "Argentina",
  estado: "Córdova"
};

// Existe o método "assign" proveniente de Object

var mergeObjetos = Object.assign({}, usuario4, extraInfo);
console.log(mergeObjetos);

// COMO JOGAR A INFO DE UM OBJETO PARA OUTRO, sem criar um novo? USANDO O MÉTODO ASSIGN TBM

var passandoOBjetoParaOutro = Object.assign(usuario4, extraInfo);
console.log(passandoOBjetoParaOutro);

//  NO ECMASCRIPT-2016, podemos usar SPREAD OPERATOR.
// ALÉM, PODEMOS ADICIONAR NOVOS OBJETOS NOS NOVOS OBJETOS CRIADOS LEMBRANDO QUE SE DEVE USAR O SPREAD OPERATOR TAMBEM

var novoNewUsuario = {
  ...usuario4,
  ...extraInfo,
  ...{
    sexo: "M",
    raça: "branca"
  }
};
console.log("novoNewUsuario", novoNewUsuario);

// E SE QUISERMOS CARREGAR UM VALOR DINAMICO PARA OS VALORES DOS OBJETOS
// E SE QUISERMOS PEGAR O VALOR DE UMA VARIÁVEL PRA SER A NOSSA KEY DENTRO DE UM OBJETO DECLARADO?
var sobrenome = "Guimarães";
var usuario5 = {
  nome: "Lilian",
  [sobrenome]:
    'pegando o valor de uma variavel para ser a "key" da propriedade do meu objeto'
};

console.log("usuario5", usuario5); //
var usuario = {
  nome: "Ayrton",
  idade: 26,
  youtube: "Programador a Bordo",
  "ultim-nome": "Romanel",
  competencias: {
    linguagens: ["JavaScript", "Python", "Go", "Scala"],
    instrumentosmusicais: ["Guitarra", "Baixo", "Bateria"]
  }
};

console.log(usuario);
console.log(usuario.nome);
console.log(usuario.competencias.linguagens);

// Um objeto pode receber uma função

var usuario2 = {
  digaOi: function(name) {
    return `Olá ${name}`;
  }
};

console.log(usuario2.digaOi("Lilian"));

// Suponha que vc tenha o nome de uma variavel para uma cor

var cor = "Azul";
var idade = 16;
// E que voce queira usar essa variavel como propriedade ou valor de um objeto
// ATENÇÃO, para o ECMA2016: é possivel passar o valor e a chave com o mesmo nome nesses casos
var usuario3 = {
  nome: "Ayrton",
  cor,
  idade
};

console.log(usuario3.cor);
console.log(usuario3.idade);

// COMO FAZER MERGE DE UM OU MAIS  OBJETOS:

var usuario4 = {
  nome: "Ayrton",
  idade: 26
};

var extraInfo = {
  pais: "Argentina",
  estado: "Córdova"
};

// Existe o método "assign" proveniente de Object

var mergeObjetos = Object.assign({}, usuario4, extraInfo);
console.log(mergeObjetos);

// COMO JOGAR A INFO DE UM OBJETO PARA OUTRO, sem criar um novo? USANDO O MÉTODO ASSIGN TBM

var passandoOBjetoParaOutro = Object.assign(usuario4, extraInfo);
console.log(passandoOBjetoParaOutro);

//  NO ECMASCRIPT-2016, podemos usar SPREAD OPERATOR.
// ALÉM, PODEMOS ADICIONAR NOVOS OBJETOS NOS NOVOS OBJETOS CRIADOS LEMBRANDO QUE SE DEVE USAR O SPREAD OPERATOR TAMBEM

var novoNewUsuario = {
  ...usuario4,
  ...extraInfo,
  ...{
    sexo: "M",
    raça: "branca"
  }
};
console.log("novoNewUsuario", novoNewUsuario);

// E SE QUISERMOS CARREGAR UM VALOR DINAMICO PARA OS VALORES DOS OBJETOS
// E SE QUISERMOS PEGAR O VALOR DE UMA VARIÁVEL PRA SER A NOSSA KEY DENTRO DE UM OBJETO DECLARADO?
var sobrenome = "Guimarães";
var usuario5 = {
  nome: "Lilian",
  [sobrenome]:
    'pegando o valor de uma variavel para ser a "key" da propriedade do meu objeto'
};

console.log("usuario5", usuario5);

// PODEMOS DECLARAR UM ARARAY DE OBJETOS

var usuarios = [
  { nome: "Lilian", idade: 26 },
  { nome: "Juliane", idade: 30 },
  { nome: "Cláudio", idade: 32 },
  { nome: "Márcio", idade: 66 }
];

// PODEMOS ACESSAR CADA OBJETO DESSE ARRAY DE FORMA CONVENCIONAL EM CADA POSIÇÃO DO ARRAY, PEPGANDO SUAS PROPRIEDADES DO OBJT

console.log("Array de objetos", usuarios)
console.log("Array de objetos, acessando o segundo a propridade 'idade' dentro do segundo item", usuarios[1].idade)

// PODEMOS TORNAR OS OBJETOS MAIS DINAMICOS DECLARANDO FUNCOES COMO PROPRIEDADES
// PARA TORNAR ELES MAIS DINAMICOS E BRINCAR COM ELES COMO SE FOSSEM MASSINHAS
// PODEMOS RETORNAR UM ARRAY DE OBJETOS DENTRO DE UM NOVO OBJETO

var usuario_item = {
    posicao: 0,
    get atual(){
        return usuarios[this.posicao]
    },
    set atual(posicao){
        this.posicao = posicao;
    },
    proximo(){
        ++this.posicao;
    },
     anterior(){
        --this.posicao;
    },

}

// PODEMOS INSTANCIAR AS FUNÇÕES DECLARAS DENTRO DE OBJETOS, OU
// PODEMOS APENAR UTILIZAR DOS RECURSOS DAS PALAVRAS RESERVADAS COMO "GET", "SET", "POST"
console.log(usuario_item.atual)
console.log(usuario_item.proximo())

console.log(usuario_item.atual)
console.log(usuario_item.proximo())
console.log(usuario_item.atual)

console.log(usuario_item.anterior())
console.log(usuario_item.atual)

usuario_item.atual = 0
console.log(usuario_item.atual)

usuario_item.atual = 2
console.log(usuario_item.atual)

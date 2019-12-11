// ECMASCRIPT6 - DESTRUCTURING - forma mais curta de pegar propriedades de um objeto
var NovoUsuario = {
    nome: "Ayrton",
    idade: 26,
    pais: 'Brasil'
  };
  
// apenas uma forma mais simples de pegar a propridade ou valor de um objeto
var{idade, nome, pais} = NovoUsuario
console.log(nome,idade,pais)

// 1- podemos também armazenar o valor ou key numa outra variável
var{nome: primeiroNome} = NovoUsuario;
console.log(primeiroNome)

// 2- PARA EXTRAIR PROPRIEDADE de um objeto que esteja aninhado a um outro objeto
console.log('---- 1) Pegando propriedades de objetos dentro de objetos:')

var NovoUsuario2 = {
    nome: {
        primeiro: "Ayrton",
        sobrenome: "Guimarães"
    }
  };

var {nome: {sobrenome}} = NovoUsuario2;
console.log(nome,sobrenome)

console.log("---- 3)COMO PARAMETRO DE UMA FUNÇÃO PARA EXTRAIR ALGUMAS PROPRIEDADES DE UM OBJETO-")
// 3- COMO PARAMETRO DE UMA FUNÇÃO PARA EXTRAIR ALGUMAS PROPRIEDADES DE UM OBJETO
// Inclusive passando valores default como argumentos pra "filtrar esse objeto"
var usuarioFuncao = {
    nome: 'Lilian',
    comida :'pipoca',
}

function imprimeUsuario({comida,cor='ROSA'}){
    console.log(comida)
    console.log(cor)
}

imprimeUsuario(usuarioFuncao)
console.log("\n")


console.log("-----4-PARA PEGAR AS PROPRIEDADES DE UM OBJETO-------")
console.log(Object.keys(usuarioFuncao))
console.log(Object.values(NovoUsuario))
console.log("\n")

console.log("-----5) ITERANDO OBJETOS COM LOOP FOR -------")
var geographicalInfos = {
    name_pais: 'Suíça',
    capital :'Zurich',
    idh: '789.2',
    renda_per_capita: 50
}
// primeiramente, precisamos armazenar numa variável um array com as propriedades deste objeto
var props = Object.keys(geographicalInfos)

for(var i = 0;i < props.length;i++){
    // pegando propriedades dinamicamente
    console.log(geographicalInfos[props[i]])
}

console.log("\n")
console.log("-----6) ITERANDO OBJETOS COM FOR OF -------")
for(var prop of props){
    console.log(geographicalInfos[prop])
}
console.log("\n")
console.log("-----7) ITERANDO OBJETOS COM FOR IN -------")
for(var prop2 in geographicalInfos){
    console.log(geographicalInfos[prop2])
}

console.log("\n")
console.log("-----8) MÉTODO HasOwnProperty -------")
// usado para certificar que os valores de objt são de fato dele
// pois pode acontecer desta propriedade ter herdado propriedades de outro local

for(var prop2 in geographicalInfos){
    if(geographicalInfos.hasOwnProperty(prop2)){
        console.log(prop2, geographicalInfos[prop2])
    }
}

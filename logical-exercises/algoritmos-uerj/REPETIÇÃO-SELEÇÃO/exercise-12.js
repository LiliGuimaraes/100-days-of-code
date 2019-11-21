const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question(
  `Digite o número de gols marcados pelo GRÊMIO: `,
  userGolsGremio => {
    r1.question(`Digite o número de gols marcados pelo INTER: `, userGolsInter => {
      if(userGolsGremio === userGolsInter){
        console.log("EMPATE!!")          
      } else if(userGolsGremio > userGolsInter){
        console.log("O vencedor é o GRÊMIO")  
      } else{
        console.log("O vencedor é o INTER")  
      }
      r1.close();
    })
  });


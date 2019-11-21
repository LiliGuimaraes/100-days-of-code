const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// @TODO: create async function to check invalid arguments
// function fine(param1, param2) {
//   if (
//     (param1 && param2 == null) ||
//     (param1 && param2 === undefined) ||
//     (param1 && param2 == "") )

//     throw new Error("Valores inválidos no sistema");
// }

r1.question(
  `Digite o número de gols marcados pelo GRÊMIO: `,
  userGolsGremio => {
    r1.question(
      `Digite o número de gols marcados pelo INTER: `,
      userGolsInter => {
        if ((userGolsInter === null) || (userGolsGremio === null)){
          r1.setPrompt(`Respostas inválidas para o sistema` );
          r1.prompt();
        } else {
          if (userGolsGremio === userGolsInter) {
            r1.setPrompt(`EMPATE!!`);
            r1.prompt();
            r1.question(`Novo jogo? 1-SIM, 2-NÃO`),
              userResponde => {
                console.log(userResponde);
              };
          } else if (userGolsGremio > userGolsInter) {
            r1.setPrompt(`O vencedor é o GRÊMIO`);
            r1.prompt();
            r1.question(`Novo jogo? 1-SIM, 2-NÃO`),
              userResponde => {
                console.log(userResponde);
              };
          } else {
            r1.setPrompt(`O vencedor é o INTER`);
            r1.prompt();
            r1.question(`Novo jogo? 1-SIM, 2-NÃO`),
              userResponde => {
                console.log(userResponde);
              };
          }
        }
        r1.close();
      }
    );
  }
);

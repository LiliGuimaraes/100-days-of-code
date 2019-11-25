const readlines = require("readline");
const diet = readlines.createInterface({
  input: process.stdin,
  output: process.stdin
});

function makeRandomAmountMeal() {
  var text = "";

  // Math.random using A-Z alphabetic letters - food ID
  var foodIdPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var max_foodIdPossible = 5;

  for (var foodLetter = 0; foodLetter <= max_foodIdPossible; foodLetter++) {
    var r_foodId = Math.floor(Math.random() * foodIdPossible.length);
    text += possible.substring(r_foodId, r_foodId + 1);
  }
  return text;
}

diet.question(`Quantas refeições você fez hoje?`, amountMeals => {
  let toNumber = Number(amountMeals);
  diet.setPrompt(typeof toNumber);
  let temp = 0;
  while (temp <= amountMeals) {
      console.log('ola')
  }
  
});

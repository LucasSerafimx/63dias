// Pérador condicional ternario

let age = 16;
console.log(
  age >= 18 // Condição
   ? "Você pode dirigir" // Se verdadeiro
   : "Você não pode dirigir"); // Se falso


// IF (SE) -> So vai rodar se for verdadeiro

let hour = 11;

if (hour <= 12) {
  console.log("Bom dia")
}

// IF + ELSE -> ELSE é o SE NÃO

age = 17

if (age >= 18){
  console.log("Você é maior de idade")
} else{
  console.log("Você não é maior de idade")
}


// ELSE IF -> Execultado se nenhuma das opções anteriores forem verdadeira.

hour = 13;
if (hour <= 12){
  console.log("Bom dia")
}

else if (hour > 12){
  console.log("Boa tarde")
}

else if (hour > 18){
  console.log("Boa noite")
}

// Estrutura Switch

let option = 4;

switch (option) {
  case 1:
    console.log("Opção 1");
    break;
  case 2:
    console.log("Opção 2");
    break;
  case 3:
    console.log("Opção 3");
    break;
  default:
    console.log("Opção inválida");
    break;
}
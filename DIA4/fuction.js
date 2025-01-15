// Funções

// Passando o parametros
function message(username){
  console.log("Hello World! " + username);
}

// Chamada para função
// Passando o argumento
message("Lucas")


function sum(a,b){
  console.log(a + b)
}

sum(20,30)

// Parametro com valor padrão = a vazio
function joinText(text1, text2 = ""){
  console.log(text1,text2)
}

joinText("Hello")



// USANDO O RETURN

function multiply(a,b){
  return a * b
}

let result = multiply(10, 5)

console.log(result)
console.log(multiply(10,2))


// FUNÇÃO COM DOCUMENTAÇÃO

/**
 * Authenticates the user
 * 
 * @param {string} email user email address
 * @param {string} password more than 6 characters
 * @returns {number} user id
 */

function signIn(email, password) {
  // Fluxo de autenticação simulado
  if (email === "Lucas.serafim@email.com" && password === "123456") {
    return "Autenticação bem-sucedida!";
  } else {
    return "E-mail ou senha inválidos.";
  }
}

console.log(signIn("Lucas.serafim@email.com", "123456")); // Autenticação bem-sucedida!
console.log(signIn("Lucas.serafim@email.com", "wrongpassword")); // E-mail ou senha inválidos.



// FUNÇÃO ANONIMA
// -> Usada com uma variavel

let sumFunction = function(a, b){
  return a + b
}

console.log(sumFunction(10,20)) // 30



// ARROW FUNCTION

let multiplyFunction = (a, b) =>{
  return a * b
} 

console.log(multiplyFunction(10,20)) // 200


// CALLBACK FUNCTION 

function execute(taskName,callback){
  console.log(`Execultando a tarefa:, ${taskName}!`)
  callback()
}

function callback(){
  console.log("Tarefa finaliada.")
}

execute("Download do arquivo...", callback)
const USD = 5.19
const EUR = 5.32
const GBP = 6.08
const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

amount.addEventListener("input", () =>{
  // Proibir o uso de letras no input
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, '')
});



// Capturando evento de submit do formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

  switch(currency.value) {
    case 'USD':
      // Convertendo USD para BRL
      convertCurrency(amount.value, USD,'US$');
      break;
    case 'EUR':
      // Convertendo EUR para BRL
      convertCurrency(amount.value, EUR,'€');
      break;
    case 'GBP':
      // Convertendo GBP para BRL
      convertCurrency(amount.value, GBP, '£');
      break;
    default:
      alert('Moeda inválida');
      break;  // Aqui você pode adicionar outras opções de conversão caso deseje adicionar mais moedas.
  }
})

// Função para converter moeda
function convertCurrency(amount,price,symbol){
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
    // let total = (amount * price).toFixed(2).replace(".", ",");
    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$","")


    result.textContent = `${total} Reais`
    
    footer.classList.add('show-result')
  } catch (erro){
    footer.classList.remove('show-result');
    alert('Ocorreu um erro durante a conversão!');
    return;
  }
}

  
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })
}



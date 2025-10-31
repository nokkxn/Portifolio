// Seleciona o botão de tema e o body
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

// Quando clicar no botão, executa a função
trilho.addEventListener('click', toggleTema)

// Função que ativa/desativa modo claro
function toggleTema() {
  trilho.classList.toggle('dark') // move o botão
  body.classList.toggle('dark')   // troca tema do body
}

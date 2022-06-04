let idades = []
let idade
function adicionar_idade() {
  idade = document.getElementById('idade').value
  idades.push(idade)
  limpar()
}

function limpar() {
  document.getElementById('idade').value = ''
}

function verificar() {
  document.getElementById('resultados').style.display = 'block'
  let maior = 0,
    menor = 0

  for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
      maior++
    } else {
      menor++
    }
  }
  document.getElementById(
    'maior'
  ).innerHTML = `Pessoas maiores de idade: ${maior}`
  document.getElementById(
    'menor'
  ).innerHTML = `Pessoas menores de idade: ${menor}`
}

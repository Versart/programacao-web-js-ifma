let bebidas = [
  { nome: suco, preco: 4.0 },
  { nome: refrigerante, preco: 2.5 },
  { nome: agua, preco: 1.5 }
]

let comidas = [
  { nome: bolo, preco: 3.5 },
  { nome: pastel, preco: 3.0 },
  { nome: torta, preco: 4.0 }
]

function conta() {
  let valor = 0.0
  let aux_comidas = document.querySelectorAll('[name=comida]:checked')
  let pedido_comidas = []
  for (let i = 0; i < aux_comidas.length; i++) {
    pedido_comidas.push(aux_comidas[i].value)
  }
  document.getElementById('recibo').style.display = 'block'
  let nome = document.getElementById('nome').value
  let bebida = document.querySelector('input[name=bebida]:checked').value
  document.getElementById('nome-cliente').innerHTML = `Nome do Cliente: ${nome}`
  document.getElementById(
    'bebida-consumida'
  ).innerHTML = `Bebida Consumida: ${bebida}`
  document.getElementById(
    'comida-consumida'
  ).innerHTML = `Comida consumida: ${pedido_comidas}`

  for (let i = 0; i < bebidas.length; i++) {
    if (bebida == bebidas[i].nome.value) {
      valor += bebidas[i].preco
    }
  }
  for (let i = 0; i < pedido_comidas.length; i++) {
    for (let j = 0; j < comidas.length; j++) {
      if (pedido_comidas[i] == comidas[j].nome.value) {
        valor += comidas[j].preco
      }
    }
  }
  document.getElementById('valor').innerHTML = `Valor: ${valor.toPrecision(
    2
  )} R$`
}

function pedido() {
  let codigo = document.getElementById('codigo').value
  let quantidade = document.getElementById('quantidade').value
  let valor
  if (codigo == 100 || codigo == 103) {
    valor = quantidade * 1.2
    document.getElementById('valor').innerHTML = `Valor: ${valor.toFixed(2)}R$`
    document.getElementById('recibo').style.display = 'block'
  } else if (codigo == 101 || codigo == 104) {
    valor = quantidade * 1.3
    document.getElementById('valor').innerHTML = `Valor: ${valor.toFixed(2)}R$`
    document.getElementById('recibo').style.display = 'block'
  } else if (codigo == 102) {
    valor = quantidade * 1.5
    document.getElementById('valor').innerHTML = `Valor: ${valor.toFixed(2)}R$`
    document.getElementById('recibo').style.display = 'block'
  } else if (codigo == 105) {
    valor = quantidade * 1
    document.getElementById('valor').innerHTML = `Valor: ${valor.toFixed(2)}R$`
    document.getElementById('recibo').style.display = 'block'
  }
}

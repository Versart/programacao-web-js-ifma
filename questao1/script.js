function numeros() {
  let numero1 = document.getElementById('numero1').value
  let numero2 = document.getElementById('numero2').value
  let numero3 = document.getElementById('numero3').value
  let numero4 = document.getElementById('numero4').value
  let numero5 = document.getElementById('numero5').value

  document.getElementById('resultado').innerHTML = 'Resultados'
  document.getElementById(
    'resultado1'
  ).innerHTML = `${numero1}<sup>2</sup> =  ${Math.pow(numero1, 2)}`
  document.getElementById(
    'resultado2'
  ).innerHTML = `${numero2}<sup>2</sup> = ${Math.pow(numero2, 2)}`
  document.getElementById(
    'resultado3'
  ).innerHTML = `${numero3}<sup>2</sup> = ${Math.pow(numero3, 2)}`
  document.getElementById(
    'resultado4'
  ).innerHTML = `${numero4}<sup>2</sup> = ${Math.pow(numero4, 2)}`
  document.getElementById(
    'resultado5'
  ).innerHTML = `${numero5}<sup>2</sup> = ${Math.pow(numero5, 2)}`
}

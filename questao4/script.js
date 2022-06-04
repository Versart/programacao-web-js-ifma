function extenso() {
  let x = document.getElementById('data').value
  if (x != '') {
    let valores = []
    valores = x.split('-')

    if (valores[1] == 1) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de janeiro de ${valores[0]}`
    } else if (valores[1] == 2) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de fevereiro de ${valores[0]}`
    } else if (valores[1] == 3) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de março de ${valores[0]}`
    } else if (valores[1] == 4) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de abril de ${valores[0]}`
    } else if (valores[1] == 5) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de maio de ${valores[0]}`
    } else if (valores[1] == 6) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de junho de ${valores[0]}`
    } else if (valores[1] == 7) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de julho de ${valores[0]}`
    } else if (valores[1] == 8) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de agosto de ${valores[0]}`
    }
    if (valores[1] == 9) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de setembro de ${valores[0]}`
    } else if (valores[1] == 10) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de outubro de ${valores[0]}`
    } else if (valores[1] == 1) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de novembro de ${valores[0]}`
    } else if (valores[1] == 12) {
      document.getElementById('tela-data').style.display = 'block'
      document.getElementById(
        'data-extenso'
      ).innerHTML = `${valores[2]} de dezembro de ${valores[0]}`
    }
  }
}

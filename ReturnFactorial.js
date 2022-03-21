function fatorial(valor) {
    let contador = 1;
    console.log('contador1:',contador)
    for(let i = valor; i > 1; i--){
      contador = contador * i
    }
    return contador;
  }
  console.log(fatorial(4))
  
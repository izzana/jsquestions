function expoente(base,expoente) {
    const potencia = Math.pow(base,expoente);
    return potencia;
  }
  
  //console.log(expoente(2,6))
  
  //with arrow function
  
  let potencias = (base,expoente) => { 
    console.log(Math.pow(base,expoente));
  }
  potencias(2,6);
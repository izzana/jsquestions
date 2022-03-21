function positiveNumbers(valores) {
    var aux = 0;
    for(let i = 0; i < valores.length; i++) {
      if(valores[i] > 0) {
        aux = aux + valores[i];
      }
    } 
    return aux
  }
  //console.log(positiveNumbers([3,2,-1,5]));
  
  //or
  
  function positiveNumbers3(valores) {
    var aux = 0;
    valores.forEach(function(valor){
      if(valor > 0) {
        aux+=valor;
      }
    })
    return aux;
  }
  console.log(positiveNumbers3([3,2,-1,5]));
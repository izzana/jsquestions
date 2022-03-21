function doubleNumbers(arr) {
    const result = []; //declarando uma array
    for(let i = 0; i < arr.length; i++) {
      let aux = arr[i] * 2;
      result.push(aux);
    }
    return result;
  }
  console.log(doubleNumbers([2, 5, 100]));
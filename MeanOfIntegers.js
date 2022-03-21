function media(arr){
    var num = 0;  
    for(let i in arr) {
      num += arr[i]
    }
    return num / arr.length;
  }
  console.log('media:',media([4,6,6]))
function squares(num){
    let arr = 0;
    let aux = 0;
    let aux2 = []
    do{
      aux = num * num;
      aux2.push(aux)
      arr++;
      num--;
    } while(num!=0);
    
    return aux2;
  }
  console.log(squares(9));
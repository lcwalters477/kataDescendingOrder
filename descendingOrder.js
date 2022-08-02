
function descendingOrder(n){
   if(n >=0){
        digits = n.split('').map(n => parseInt(n, 10));
        digits.sort();
        digits.reverse();
        n = digits.join('');
        return n;
    }
  }
  descendingOrder('715134');
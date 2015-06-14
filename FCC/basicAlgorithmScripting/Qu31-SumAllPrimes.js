/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-03
* Time: 04:38 PM
* To change this template use Tools | Templates.
*/

function sumPrimes(num) {
    var sum = 0;
  for(var i = 0; i <= num; i++){
      if(isPrime(i)){
        console.log(i + ' :is a prime number');  
          sum += i;
      }
  }
    return sum;
}

function isPrime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 var m=Math.sqrt(n);
 for (var i=2;i<=m;i++) {
    if (n%i===0){
        return false; 
    } 
 }
 
 return true;
}


sumPrimes(977);
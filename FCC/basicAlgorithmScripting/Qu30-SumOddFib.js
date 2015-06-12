function sumFibs(num) {
    var result = 0;
    if(isFib(num)){
       var prev = 0;
       var curr = 1;
        while(prev <= num){
        
        if(isOdd(prev)){
            result += prev;
        }
        
        
        curr = prev + curr;
        prev = curr - prev;
 }
 return result+num;
       
    }else{
        var prev1 = 0;
       var curr1 = 1;
        while(prev1 <= num){
        
        if(isOdd(prev1)){
            result += prev1;
        }
        
        curr1 = prev1 + curr1;
        prev1 = curr1 - prev1;
 }
    }
  return result;
}

function isOdd(value){
    if(value % 2 === 0){
        return false;
    }
    return true;
}

function isFib(val){
 var prev = 0;
 var curr = 1;
 while(prev<val){
   if(prev == val){
     return true;
   }
   curr = prev + curr;
   prev = curr - prev;
 }
 return false;
}



sumFibs(4);
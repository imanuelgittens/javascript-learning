/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-04
* Time: 12:22 PM
* To change this template use Tools | Templates.
*/

function find(arr, func) {
   var x = arr.some(func);
   if(x){
       var result = arr.filter(func);
       return result[0];
   }else{
       return undefined;
   }

}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
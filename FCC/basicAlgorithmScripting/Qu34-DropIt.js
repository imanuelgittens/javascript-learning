/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-04
* Time: 12:37 PM
* To change this template use Tools | Templates.
*/
function drop(arr, func) {
  // Drop them elements.
  //arr.sort();
  //arr.reverse();
    for(var i = 0; i < arr.length; i++){
        var x = arr.some(func);
        if(x === false){
            console.log(x);
            arr.shift();
            i--;
        }
        
    }
  
  return arr;
}

drop([1, 2, 3, 4], function(n) {return n > 5; });
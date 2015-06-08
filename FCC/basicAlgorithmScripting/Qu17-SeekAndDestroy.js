/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-31
* Time: 09:52 PM
* To change this template use Tools | Templates.
*/

function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  var array = args[0];
  args.splice(0,1);
  for(var i = 0; i < args.length; i++){
      
     for(var j = 0; j < array.length; j++){
        if(array[j] === args[i]){
            array.splice(j, 1);
        }
     }
  }
  return array;
  
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-07
* Time: 04:03 PM
* To change this template use Tools | Templates.
*/

function unite(arr1, arr2, arr3) {
  var result = [];
  var args = Array.prototype.slice.call(arguments);
  var flatArgs = args.reduce(function(a,b){
      return a.concat(b);
  });
  
  for(var i = 0; i < flatArgs.length; i++){
      if(result.indexOf(flatArgs[i]) < 0){
          result.push(flatArgs[i]);
      }
  }
  
  return result;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
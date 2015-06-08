/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-16
* Time: 02:39 AM
* To change this template use Tools | Templates.
*/

function chunk(arr, size) {
  // Break it up.
  var result = [];
  while(arr.length > 0){
      var temp = arr.splice(0, size);
      result.push(temp);
  }
  
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
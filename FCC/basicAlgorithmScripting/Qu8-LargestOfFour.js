/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-14
* Time: 12:15 AM
* To change this template use Tools | Templates.
*/

function largestOfFour(arr) {
  // You can do this!
  var result = [];
  for(var i = 0; i < arr.length; i++){
      var temp = arr[i];
      var max = 0;
      for(var j = 0; j < temp.length; j++){
          if(temp[j] > max){
              max = temp[j];
          }
      }
      result.push(max);
      max = null;
      temp = null;
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
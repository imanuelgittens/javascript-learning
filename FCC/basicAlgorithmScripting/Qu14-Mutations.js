/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-19
* Time: 12:07 AM
* To change this template use Tools | Templates.
*/
function mutation(arr) {
  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();

  var result = true;
  
  var string2Arr = string2.split('');
  var length = string2Arr.length;
  for(var i = 0; i < length; i++){
    var char = string2Arr.pop();
    var n = string1.indexOf(char);
    if(n < 0){
        result = false;
    }
  }
  return result;
}

mutation(['Hello', 'hello']);
/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-14
* Time: 12:15 AM
* To change this template use Tools | Templates.
*/

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var strLength = str.length;
  var targetLength = target.length;  
  var ending = str.substr(strLength-targetLength);
  
  if(ending === target){
      return true;
  }else{
      return false;
  }
}

end('Bastian', 'n');
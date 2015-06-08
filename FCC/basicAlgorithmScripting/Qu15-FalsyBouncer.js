/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-16
* Time: 01:07 PM
* To change this template use Tools | Templates.
*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var result = arr.filter(truethy);
  return result;
}

function truethy(value){
    if(value !== null && value !== undefined && value !== '' && value !== false && value !== isNaN && value !== 0){
        return true;
    }else{
        return false;
    }
}

bouncer([7, 'ate', '', false, 9]);
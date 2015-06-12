/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-03
* Time: 11:28 AM
* To change this template use Tools | Templates.
*/
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
    var x = Boolean(bool);
    if(x === bool){
        return true;   
    }else{
        return false;   
    }

  
}

boo(null);
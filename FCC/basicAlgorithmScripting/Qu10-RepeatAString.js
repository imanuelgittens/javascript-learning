/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-14
* Time: 12:15 AM
* To change this template use Tools | Templates.
*/

function repeat(str, num) {
  // repeat after me
  if(num < 1){
    return '';
  }else{
    return str + repeat(str, num - 1);
  }
  
}

repeat('abc', 3);
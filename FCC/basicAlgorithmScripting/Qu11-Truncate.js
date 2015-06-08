/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-16
* Time: 02:15 AM
* To change this template use Tools | Templates.
*/

function truncate(str, num) {
  // Clear out that junk in your trunk
  var result = '';
  if(str.length > num){
    for(var i = 0; i < num - 3; i++){
      result += str.charAt(i);
    } 
    result += '...';
    return result;
  }else{
      return str;
  }
  
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-12
* Time: 10:43 AM
* To change this template use Tools | Templates.
*/

function convert(str) {
  var result = [];
  
  for(var i = 0; i < str.length; i++){
      if(str.charAt(i) === "&"){
          result.push('&amp;');
      }else if(str.charAt(i) === "<"){
          result.push('&#60;');
      }else if(str.charAt(i) === ">"){
          result.push('&#62;');
      }else if(str.charAt(i) === ""){
          result.push('&#32;');
      }else if(str.charAt(i) === "'"){
          result.push('&#39;');
      }else{
          result.push(str.charAt(i));
      }
  }
  return result.join('');
}

convert('Dolce & Gabbana');
/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-04
* Time: 12:54 PM
* To change this template use Tools | Templates.
*/

function binaryAgent(str) {
    
    var arr = str.split(' ');
    var result = [];
    for(var i = 0; i < arr.length; i++){
        var digit = parseInt(arr[i], 2);
        var temp = String.fromCharCode(digit); 
        result.push(temp);
    }
  return result.join('');
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
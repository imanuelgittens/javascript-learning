/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-12
* Time: 10:34 AM
* To change this template use Tools | Templates.
*/

function pair(str) {
    var result = [];
 for(var i = 0; i < str.length; i++){
     if(str.charAt(i) === 'G'){
         result.push(['G', 'C']);
     }else if(str.charAt(i) === 'C'){
         result.push(['C', 'G']);
     }else if(str.charAt(i) === 'A'){
         result.push(['A', 'T']);
     }else if(str.charAt(i) === 'T'){
         result.push(['T', 'A']);
     }
 }
 
 return result;
}

pair("GCG");
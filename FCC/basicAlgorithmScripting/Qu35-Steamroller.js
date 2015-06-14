/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-08
* Time: 10:15 AM
* To change this template use Tools | Templates.
*/

function steamroller(arr) {
  // I'm a steamroller, baby
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(steamroller(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    
    return result;
}

steamroller([1, [2], [3, [[4]]]]);
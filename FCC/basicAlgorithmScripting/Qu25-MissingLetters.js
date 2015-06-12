/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-03
* Time: 11:18 AM
* To change this template use Tools | Templates.
*/

function fearNotLetter(str) {
    var start = str.charCodeAt(0);
    var end = str.charCodeAt(str.length-1);
    var result = undefined;
    
    for(var i = start; i <= end; i++){
        var templetter = String.fromCharCode(i);
        if(str.indexOf(templetter) < 0){
            return templetter;
        }
    }
    return result;
}

fearNotLetter('ABC');

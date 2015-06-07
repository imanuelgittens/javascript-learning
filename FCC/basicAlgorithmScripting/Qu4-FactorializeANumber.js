/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-13
* Time: 12:11 AM
* To change this template use Tools | Templates.
*/

function factorialize(num) {
    if(num < 0){
        return -1;   
    }else if(num === 0){
        return 1;
    }else{
        return (num * factorialize(num - 1));
    }
    
}

console.log(factorialize(5));

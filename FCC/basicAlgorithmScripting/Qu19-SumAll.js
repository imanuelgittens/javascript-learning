/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-01
* Time: 10:03 AM
* To change this template use Tools | Templates.
*/
function sumAll(arr) {
    arr.sort();
    var sum = 0;
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    while(min <= max){
        sum += min;
        min++;
    }
    return sum;
}

sumAll([10, 5]);
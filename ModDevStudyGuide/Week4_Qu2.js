/*Define a function sum() and a function multiply() that sums and multiplies

(respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should 

return 10, and multiply([1,2,3,4]) should return 24.*/

function sum(arr){
    var result = 0;
    for(var i = 0; i < result.length; i++){
        result += arr[i];   
    }
    return result;
}

function multiply(arr){
    var result = 0;
    for(var i = 0; i < result.length; i++){
        result *= arr[i];   
    }
    return result;
}
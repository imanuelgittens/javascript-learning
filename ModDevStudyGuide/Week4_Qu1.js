/*Write a function findLongestWord() that takes an array of words and returns the length of the longest word.*/

function(arr){
    var longest = '';
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];   
        }
    }
    return arr.length;
}
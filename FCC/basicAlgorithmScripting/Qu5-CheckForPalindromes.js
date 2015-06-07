/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-13
* Time: 12:31 AM
* To change this template use Tools | Templates.
*/

function palindrome(str) {
  // Good luck!
  var upperString = str.toUpperCase();
  var arr = upperString.split('');
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === ' ' || arr[i] === '.' || arr[i] === ','){
        arr.splice(i, 1)
        i--;
    }   
  }
  var normalString = arr.join('');
  console.log(normalString);
  var reverseArr = arr.reverse();
  var reverseString = reverseArr.join('');
  if(normalString === reverseString){
      return true;
  }
  else{
      return false;
  }

}



palindrome("never odd or         even");

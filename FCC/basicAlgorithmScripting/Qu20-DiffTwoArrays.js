/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-01
* Time: 03:37 PM
* To change this template use Tools | Templates.
*/

function diff(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++){
          if(arr2.indexOf(arr1[i]) < 0){
              newArr.push(arr1[i]);
              console.log(newArr);
 
          }
          
      }
     for(var j = 0; j < arr2.length; j++){
          if(arr1.indexOf(arr2[j]) < 0){
              newArr.push(arr2[j]);
              console.log(newArr);
            
          }
          
      }
  return newArr;
}

diff([1, 2, 3, 4, 5], [1, 2, 3, 5]);
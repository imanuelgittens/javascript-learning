/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-16
* Time: 02:41 AM
* To change this template use Tools | Templates.
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
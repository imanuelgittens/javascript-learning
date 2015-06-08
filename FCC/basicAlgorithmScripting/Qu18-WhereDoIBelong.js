/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-01
* Time: 09:54 AM
* To change this template use Tools | Templates.
*/

function where(arr, num) {
  arr.push(num);
  arr.sort();
  return arr.indexOf(num);
}

where([40, 60], 50);
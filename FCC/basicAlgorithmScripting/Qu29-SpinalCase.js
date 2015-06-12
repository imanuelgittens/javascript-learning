/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-03
* Time: 11:46 AM
* To change this template use Tools | Templates.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
    var newString = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var lowerCase = newString.toLowerCase();
    var result = lowerCase.replace(/[\s_]/g, '-');
  
  return result;
}

spinalCase('This_Is SpinalTap');
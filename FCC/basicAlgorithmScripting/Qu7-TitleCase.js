/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-13
* Time: 11:35 PM
* To change this template use Tools | Templates.
*/

function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

titleCase("I'm a little tea pot");
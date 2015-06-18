/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-07
* Time: 03:15 PM
* To change this template use Tools | Templates.
*/

function every(collection, pre) {
  // Does everyone have one of these?
  for(var i = 0; i < collection.length; i++){
      if(!(collection[i].hasOwnProperty(pre))){
          return false;
      }
  }
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
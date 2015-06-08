/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-19
* Time: 01:03 AM
* To change this template use Tools | Templates.
*/

function where(collection, source) {
  var arr = [];
  // What's in a name
  var prop = Object.keys(source)[0];
  for(var i = 0; i < collection.length; i++){
      if(collection[i].hasOwnProperty(prop)){
          if(collection[i][prop] === source[prop]){
              arr.push(collection[i]);
          }
      }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
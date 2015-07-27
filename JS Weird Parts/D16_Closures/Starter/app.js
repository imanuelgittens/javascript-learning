function greet(whattosay){

  return function(name){
    console.log(whattosay + ' ' + name);
  }

}

greet('Hi')('Tony'); //We invoke a function that returns a function that can be invoked again

var sayHi = greet('Hi');
sayHi('Tony');

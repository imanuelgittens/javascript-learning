// IIFE
var firstname = 'John';

(function(global, name) {// IIFEs create their own execution context.This makes your code safe and avoid collisions with other code.

    var greeting = 'Hello';
    global.greeting = 'Hello';//intentionally access the global object
    console.log(greeting + ' ' + name);

}(window, name)); // IIFE

console.log(greeting);

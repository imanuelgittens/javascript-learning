function greet(name){
    name = name || '<Your name here>'; //OR returns the first value that can be coerced to true
    console.log(name);
    console.log('Hello ' + name);   
}

greet('Tony');
greet();
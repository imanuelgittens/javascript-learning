greet();

function greet(){// function statement. It's run but it doesn't return a value till it's executed
    console.log('Hi');    
}

var anonymousGreet = function(){ // function expression. This results in a value. When the code is executing, it returns a function object.
    console.log('Hi');
}

anonymousGreet();

function log(a){
    a();  
}

log(function(){//functions can be passed to functions
    console.log('Hi');
});
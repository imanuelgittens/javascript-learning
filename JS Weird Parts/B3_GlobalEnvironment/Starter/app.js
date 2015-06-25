var a = 'Hello World';

function b(){
    
}

/*When this code is run, the JS engine creates a global object,a variable called 'this' and a link to the 'Outer Environment'.
In the browser, the global object  = 'window' and in the global execution context, 'this' = 'window'. 
In the global execution context, your code is attached to the 'window'.
Hence a = 'Hello World'
window.a = 'Hello World'
this.a = 'Hello World'*/
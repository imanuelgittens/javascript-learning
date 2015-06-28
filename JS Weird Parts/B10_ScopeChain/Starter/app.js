function a() {

    function b() {
        console.log(myVar);
    }
    
    var myVar = 2;
    b();
}

var myVar = 1;
a();

/*WHenever you lookup  variable inside any execution context, If the JS engine cannot find that variable, it will look at the outer environment and see if it's there. It creates this reference based on where your code was physically written.*/
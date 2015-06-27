function b(){
    var myVar;  
    console.log(myVar);
}

function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
/*Every execution context has its own variable environment. This is why myVar can be declared more than once. Just making sure that the declartions are in different execution contexts*/
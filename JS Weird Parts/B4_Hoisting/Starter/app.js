b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

/*Hoisting doesn't move code around. Before your code is read line by line, the JS engine sets up memory space for all the functions and variables. This is what is referred to as 'Hoisting'.

The function in its entirety is added to memory however variables are added with an initial value of undefined.*/
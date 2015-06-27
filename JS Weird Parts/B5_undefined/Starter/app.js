var a;
console.log(a);

a = undefined; //NEVER DO THIS!!

if(a === undefined){
    console.log('a is undefined!') ;  
}else{
    console.log('a is defined!');   
}

/*Undefined is a special value that javascript has internally that means the value hasn't been set.

The initial phase of the execution context sets all variables to undefined.

*/
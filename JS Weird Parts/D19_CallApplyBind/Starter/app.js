var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2){
    console.log('Logged: ' + this.getFullName());   
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');
}

var logPersonName = logName.bind(person);//bind returns a new function with the 'this' variable pointing to the oject that was passed to the bind method. 

logPersonName('en');

logName.call(person, 'en', 'es');//Call doesn't create a copy. It just executes it and decides the 'this' variable

logName.apply(person, ['en', 'es']);//Apply method works like call however the extra arguments need to be in an array

(function(lang1, lang2){
    console.log('Logged: ' + this.getFullName());   
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');
}.apply(person, ['en', 'es']));














//function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));//we borrowing getFullName from the person object


//function currying
function multiply(a,b){
    return a*b;   
}

var multiplyByTwo = multiply.bind(this, 2);//permanently sets first parameter to 2
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);//permanently sets first parameter to 2
console.log(multiplyByTwo(4));
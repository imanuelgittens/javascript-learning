var speak = function(saywhat){
    console.log(saywhat);   
}

var Dog = function(){
    var name, breed;   
}

var Cat = function(){
    var name, breed;   
}

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('Woof!');

firstDog = new Cat;
firstDog.name = "Snowball";
firstDog.breed = "manx";
firstDog.speak('Meow!');
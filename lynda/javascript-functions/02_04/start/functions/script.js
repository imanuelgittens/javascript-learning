/*Call passes a value and Apply passes an array. These methods allow you to set the 'this' value within a function.*/

var speak = function(what){
    
    /*console.log(this.love);
    console.log(this.normal);*/
    console.log(what);
}

var saySomething = {normal: "meow",
                    love: "purr"
                   }

/*speak.call(saySomething, saySomething.normal)*/
speak.apply(saySomething, ['meouff']);


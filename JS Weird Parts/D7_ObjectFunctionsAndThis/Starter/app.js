function a(){
    console.log(this); 
    this.newvariable = 'hello';
    
}

var b = function(){
    console.log(this);   
}

a();

console.log(newvariable);

b();

var c = {//when a function is a method attached to an object, the 'this' keyword points at the object that contains the function
    name: 'The c object',
    log: function(){
        
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);   
        
        /*var setname = function(newname){
            this.name = newname;
        }in this case, 'this' is set to the global object*/
        
        var setname = function(newname){
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
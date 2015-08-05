DOT NOTATION

//1. Whenever using the dot notation (.), whatever is to the left of the dot is an object. 
//2. Dots can be used to add properties and to access properties.
    var box = {};

    box.material = "cardboard";
    
    var cb = box.material;
    
    cb; //"cardboard"
    
    box.material = "titanium";
    
    cb; //"cardboard"

    box.size; //undefined
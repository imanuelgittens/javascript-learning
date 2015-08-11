function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var reformattedArray = arr.map(function(obj) {
        var rObj = {};
        rObj.name = obj.name;
        rObj.orbitalPeriod = (2 * Math.PI * (Math.sqrt((Math.pow(obj.avgAlt + earthRadius, 3))/ GM))).toFixed(0)/1;
        //We divide by one because toFixed() returns a string. Dividing by one changes it back to a number. 
        return rObj;
        
    });
   return reformattedArray;
    //var op = (2 * Math.PI * (Math.sqrt((Math.pow(arr[0].avgAlt + earthRadius, 3))/ GM))).toFixed(0);
    //return op;
}

orbitalPeriod([{
    name: "sputkin",
    avgAlt: 35873.5553
}]);
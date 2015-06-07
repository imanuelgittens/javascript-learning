var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var sort = { 'State' : 1, 'Temperature': -1 };
    
    /*db.collection('data').count(function(err, docs) {
        if(err) throw err;

        console.dir(docs);

        db.close();
    });*/

    db.collection('data').find().sort(sort).toArray(function(err, docs) {
        if(err) throw err;
        
        if(!docs){
            console.log('The documents are finished!');
            return db.close();
        }
        
        var state = '';
        
        for(var i = 0; i < docs.length; i++){
            if(docs[i].State !== state){
                state = docs[i].State;
                db.collection('data').update({'_id': docs[i]._id},{$set:{'month_high': true}}, function(err, updated){
                    if(err){
                        throw err;   
                    }
                    
                    console.dir('Successfully updated '+updated+' document.');
                    
                    return db.close();
                });
            }
        }
        

        //console.dir(docs);

        //db.close();
    });
});
var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/school';

mongoClient.connect(url, function(err, db){
	var students = db.collection('students');
	var cursor = students.find({});
	cursor.each(function(err, doc){
        if(err){
            throw err;   
        }
		var lowest = Math.min.call(null, doc.scores[2].score, doc.scores[3].score);
		students.update({_id: doc._id}, {$pull: {scores: {score: lowest}}});
	});
    return db.close();
});
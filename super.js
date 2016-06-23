//require("../../DataBase/DB/database");
//var MongoPool = require('../../DataBase/DB/mongo-pool');
var mongoClient = require('mongodb').MongoClient;
var _ = require('underscore');

var dbUrl = 'mongodb://localhost:27017/event';
mongoClient.connect(dbUrl, function(err, dbObj){
	if(err){
		console.log("Connection with Database failed : " + err);
		return;
	}
	else{


//MongoPool.getInstance(function (db){  		
		db.createUser({ user: 'superadmin', pwd: '123456', roles: ["readWrite","dbAdmin"]});
	}
});   	



//db.createUser({ user: 'superadmin', pwd: '123456', roles: ["readWrite","dbAdmin"]});
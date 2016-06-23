var mongoose = require('mongoose');

var AccessRoleSchema = new mongoose.Schema({
    //name: String
	
	accessRoleId: Number,
	accessRole: [{type: Object}]
			
});

module.exports = mongoose.model("accessRole", AccessRoleSchema);
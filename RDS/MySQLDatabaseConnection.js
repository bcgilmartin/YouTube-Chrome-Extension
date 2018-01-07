var mysql = require('mysql');
var fs = require("fs");
var contents = fs.readFileSync("AuthKeysRDS.json");
var jsonContent = JSON.parse(contents);
var AuthKeysRDS = ('./AuthKeysRDS.json');

var connection = mysql.createConnection({
	host	 : jsonContent.host,
	user     : jsonContent.user,
	password : jsonContent.password,
	database : jsonContent.database
});

console.log({
	host	 : jsonContent.host,
	user     : jsonContent.user,
	password : jsonContent.password,
	database : jsonContent.database
});

connection.connect(function(err){
	if (err) {
		console.error('Database connection failed: ' + err.stack);
		return;
	}
	console.log('Connected to database.');
});

connection.end();

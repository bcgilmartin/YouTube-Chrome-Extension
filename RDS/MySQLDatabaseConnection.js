var mysql = require('mysql');
var fs = require("fs");
var contents = fs.readFileSync("AuthKeysRDS.json");
var jsonContent = JSON.parse(contents);
//var AuthKeysRDS = require('./AuthKeysRDS.json');

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
	
	var youtubeExtraction = require('./youtubeExtraction.json');
	
	var sql = "INSERT INTO history (email, videoID, dateAndTime) VALUES (youtubeExtraction.email, youtubeExtraction.vidID, youtubeExtraction.time)";
	
	connection.query(sql, function(err, result){
		if (err) throw err;
		console.log("1 record inserted");
	});
	
});


connection.end();

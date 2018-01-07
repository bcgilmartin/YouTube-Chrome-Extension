var mysql = require('mysql');
var AuthKeysRDS = ('./AuthKeysRDS');

var connection = mysql.createConnection({
	host	 : AuthKeysRDS.host,
	user     : AuthKeysRDS.user,
	password : AuthKeysRDS.password,
	port	 : AuthKeysRDS.port
});

connection.connect(function(err){
	if (err) {
		console.error('Database connection failed: ' + err.stack);
		return;
	}
	console.log('Connected to database.');
});

connection.end();
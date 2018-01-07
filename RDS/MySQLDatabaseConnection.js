var mysql = require('mysql');
var filePath = ('./AuthKeysRDS');
var AuthKeysRDS = JSON.parse(filePath);

var connection = mysql.createConnection({
	host	 : AuthKeysRDS.host,
	user     : AuthKeysRDS.user,
	password : AuthKeysRDS.password,
	port	 : AuthKeysRDS.port,
	database : AuthKeysRDS.database
});

console.log({
	host	 : AuthKeysRDS.host,
	user     : AuthKeysRDS.user,
	password : AuthKeysRDS.password,
	port	 : AuthKeysRDS.port,
	database : AuthKeysRDS.database

});

console.log({
    host            : process.env.MYSQL_HOST,
    user            : process.env.MYSQL_USER,
    password        : process.env.MYSQL_SECRET,
    database        : process.env.MYSQL_DB
});

connection.connect(function(err){
	if (err) {
		console.error('Database connection failed: ' + err.stack);
		return;
	}
	console.log('Connected to database.');
});

connection.end();

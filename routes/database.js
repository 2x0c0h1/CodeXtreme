var exports = module.exports;
var mysql = require('mysql');

var connection;
function handleSQL(){
	connection = mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: 'password',
		database: 'outsourced',
		charset: 'utf8mb4',
		port: 3306
	});

	connection.connect(function onConnect(err){
		if(err){
			console.log('Error connecting to database', err);
			setTimeout(handleDisconnect, 10000);
		}else{
			console.log('Connected to database');
		}
	});

	connection.on('error', function onError(err){
		console.log('Database error', err);
		if(err.code == 'PROTOCOL_CONNECTION_LOST'){
			handleSQL();
		}else{
			throw err;
		}
	});
}

handleSQL();

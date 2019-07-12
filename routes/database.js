var exports = module.exports;
var mysql = require('mysql');

var connection;

function handleSQL() {
	connection = mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'outsourced',
	});

	connection.connect(function onConnect(err) {
		if (err) {
			console.log('Error connecting to database', err);
			setTimeout(handleDisconnect, 10000);
		} else {
			console.log('Connected to database');
		}
	});

	connection.on('error', function onError(err) {
		console.log('Database error', err);
		if (err.code == 'PROTOCOL_CONNECTION_LOST') {
			handleSQL();
		} else {
			throw err;
		}
	});
}

handleSQL();

exports.nomadlogin = (callback, email, password) => {
	connection.query('SELECT * FROM nomads WHERE email = ? AND password = ?', [email, password], (err, result) => {
		if (err) {
			console.log('Error querying from nomads');
			throw err;
		} else {
			console.log('nomads query success');
			callback(err, result);
		}
	});
}

exports.companylogin = (callback, email, password) => {
  connection.query('SELECT * FROM companies WHERE email = ? AND password = ?', [email, password], (err, result) => {
  	if (err) {
  		console.log('Error querying from companies');
  		throw err;
  	} else {
  		console.log('companies query success');
  	}
  });
};

exports.getProfile = (callback, identifier, usertype) => {
  var table = (usertype == 'nomad' ? 'nomads' : 'companies');
  var argument = (typeof identifier === "string" ? 'email' : 'id')
	connection.query('SELECT * FROM ' + table + ' WHERE ' + argument + ' = ?', [identifier], (err, result) => {
		if (err) {
			console.log('Error querying from ' + table);
			throw err;
		} else {
			console.log(table + ' query success');
			callback(err, result);
		}
	});
};

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
      callback(err, result);
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

exports.getSkills = (callback, id) => {
  connection.query('SELECT nomads_skills.*,skills.skill FROM nomads_skills LEFT JOIN skills ON nomads_skills.skillid=skills.id WHERE nomadid = ?', [id], (err, result) => {
    if (err) {
			console.log('Error querying from nomads_skills');
			throw err;
		} else {
			console.log('nomads_skills query success');
			callback(err, result);
		}
  })
};

exports.getNomadProjects = (callback,id) => {
  connection.query('SELECT * FROM projects LEFT JOIN companies ON projects.companyby=companies.id WHERE nomadtaken = ?', [id], (err, result) => {
    if (err) {
			console.log('Error querying from projects');
			throw err;
		} else {
			console.log('projects query success');
			callback(err, result);
		}
  })
};

exports.getCompanyProjects = (callback,id) => {
  connection.query({sql: 'SELECT p.status,p.description, p.payrate ,p.name, n.name FROM projects as p LEFT JOIN nomads as n ON p.nomadtaken=n.id WHERE companyby = '+ [id], nestTables: '_'}, (err, result) => {
    if (err) {
			console.log('Error querying from projects');
			throw err;
		} else {
			console.log('projects query success');
			callback(err, result);
		}
  })
};


exports.getProjects = (callback) => {
  connection.query({sql: 'SELECT * FROM projects AS p LEFT JOIN companies AS c ON p.companyby=c.id WHERE status = "open"', nestTables: '_'}, (err, result) => {
    if (err) {
			console.log('Error querying from projects');
			throw err;
		} else {
			console.log('projects query success');
			callback(err, result);
		}
  })
};

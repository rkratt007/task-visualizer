'use strict';
const db_type = 'mongodb', // Database Type Mongodb
      db_server_ip = 'localhost', // IP Adresss of the server you trying to connect to
      db_server_address  = db_type + '://' + db_server_ip + '/tasks_visualizer'; // Database connecting address

module.exports = {
	ip : () => {
		return db_server_ip;
	},
	address : () => {
		return db_server_address;
	},
}
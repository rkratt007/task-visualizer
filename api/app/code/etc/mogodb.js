'use strict';

const db_type = 'mongodb',                                              // Database Type Mongodb or Mysql
      db_server_ip = '127.0.0.1',                                       // IP Adresss of the server you trying to connect to
      db_server_address  = db_type + '://' + db_server_ip + '/DBtasks'; // Database connecting address

module.exports = {
	get_db_ip   : () => {
		return db_server_ip;
	},
	get_db_server   : () => {
		return db_server_address;
	},
}
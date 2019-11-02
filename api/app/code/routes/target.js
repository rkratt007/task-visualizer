'use strict';

let tasks = require('../controllers/tasks');

module.exports = function (app) {
    app.route('/api/v1/tasks')
        .get(tasks.get_tasks)
    app.route('/api/v1/tasks/sample/install')
        .get(tasks.install_sample_data)
    app.route('/api/v1/tasks/sample/delete')
        .get(tasks.delete_sample_data)
}
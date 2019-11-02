'use strict';

let tasks = require('../controllers/tasks');

module.exports = function (app) {
    app.route('/api/v1/tasks')
        .get(tasks.get_tasks)
}
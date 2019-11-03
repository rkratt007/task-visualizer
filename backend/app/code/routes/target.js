'use strict';

let tasks = require('../controllers/tasks');

module.exports = function (app) {
    app.route('/api/v1/tasks')
        .get(tasks.get_tasks)
    app.route('/api/v1/tasks/by_user/:user')
        .get(tasks.get_tasks_by_user)
    app.route('/api/v1/delete/:tid')
        .get(tasks.del_task)
        .post(tasks.del_task)
    app.route('/api/v1/tasks/update/:tid')
        .get(tasks.set_task_update)
        .post(tasks.set_task_update)
    app.route('/api/v1/tasks/create')
        .get(tasks.set_task_insert)
        .post(tasks.set_task_insert)
    app.route('/api/v1/tasks/sample/install')
        .get(tasks.install_sample_data)
    app.route('/api/v1/tasks/sample/delete')
        .get(tasks.delete_sample_data)
}
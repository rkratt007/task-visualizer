'use strict';

let tasks  = require('../view/tasks');

module.exports = {
    get_tasks : (req, res) => {
        tasks.get(req,res);
    },
    get_users_tasks : (req, res) => {
        tasks.overview_collection(req,res);
    },
}

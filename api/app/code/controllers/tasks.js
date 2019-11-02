'use strict';

let tasks  = require('../view/tasks');

module.exports = {
    get_tasks : (req, res) => {
        tasks.get_all(req,res);
    },
    install_sample_data : (req, res) => {
        tasks.sample_data(req,res);
    },
    delete_sample_data : (req, res) => {
        tasks.sample_data_remove(req,res);
    },
}

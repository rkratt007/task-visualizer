'use strict';

let tasks  = require('../view/tasks');

module.exports = {
    get_tasks : (req, res) => {
        tasks.get_all(req,res);
    },
    get_tasks_by_user : (req, res) => {
        tasks.get_user_tasks(req,res);
    },
    set_task_update : (req, res) => {
        tasks.update_one(req,res);
    },
    set_task_insert : (req, res) => {
        tasks.insert_one(req,res);
    },
    del_task : (req, res) => {
        tasks.remove(req,res);
    },
    install_sample_data : (req, res) => {
        tasks.sample_data(req,res);
    },
    delete_sample_data : (req, res) => {
        tasks.sample_data_remove(req,res);
    },
}
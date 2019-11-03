'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TasksSchema = new Schema({
  tasks_name: String,
  task_status: String,
  tasks_time: String,
  tasks_project: String,
  tasks_owners: String,
  tasks_duedate: Date,
},{
  versionKey: false
});

module.exports = mongoose.model('TaskList', TasksSchema, 'tasks');
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TasksSchema = new Schema({
  id: String,
  tasks_name: String,
  tasks_time: String,
  tasks_project: String,
  tasks_owners: String,
  tasks_duedate: String,
});

module.exports = mongoose.model('TaskList', TasksSchema, 'tasks');
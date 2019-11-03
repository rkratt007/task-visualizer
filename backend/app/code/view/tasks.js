'use strict';
/*********************************************************************************************************************/
// Declared Module variables, constants, and objects
/*********************************************************************************************************************/
const mongoose = require('mongoose');
const resposne = require('../helper/response');
const Tasks = require('../models/tasks');
const dbinfo = require('../etc/mogodb');;

/*********************************************************************************************************************/
// Mongoose settings and connection to database
/*********************************************************************************************************************/
mongoose.Promise = global.Promise;
mongoose.connect(dbinfo.address(), { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

/*********************************************************************************************************************/
// Returns all tasks inside of the task schema
/*********************************************************************************************************************/
function tasks (req, res) {
    Tasks.find({})
        .exec((err, returned) => {
            if(err) {
                console.log('[ Error ] ' + err);
                resposne.custom_reponse(req,res,'500','Error Occured When returning Tasks');
            } else {
                resposne.custom_reponse(req,res,'200',returned);
            }
        });
};
/*********************************************************************************************************************/
// Returns all tasks by user inside of the task schema
/*********************************************************************************************************************/
function tasks_by_user (req, res) {
    var parms = resposne.get_parms(req);
    Tasks.find({ tasks_owners: parms.user })
        .exec((err, returned) => {
            if(err) {
                console.log('[ Error ] ' + err);
                resposne.custom_reponse(req,res,'500','Error Occured When returning Tasks');
            } else {
                resposne.custom_reponse(req,res,'200',returned);
            }
        });
};
/*********************************************************************************************************************/
// Removes record from database
/*********************************************************************************************************************/
function del_by_id (req, res) {
    let parms = resposne.get_parms(req);
    mongoose.set('useFindAndModify', false);
    if(parms.tid != null){
        Tasks.deleteOne({ _id: parms.tid })
            .exec((err, returned) => {
                if(err) {
                    console.log('[ Error ] ' + err);
                    resposne.custom_reponse(req,res,'500','Error Occured When deleting Task - ' + parms.tid);
                } else {
                    resposne.custom_reponse(req,res,'200','The following Task was deleted - ' + parms.tid);
                }
            });
    }
};
/*********************************************************************************************************************/
// Updates record in database
/*********************************************************************************************************************/
function update_by_id (req, res) {
    let parms = resposne.get_parms(req);
    if(parms.tid != null){
        let query = { '_id' : parms.tid };
        let update = {
            'tasks_name' : parms.tasks_name,
            'tasks_time' : parms.tasks_time,
            'tasks_project' : parms.tasks_project,
            'tasks_owners' : parms.tasks_owners,
            'tasks_duedate' : parms.tasks_duedate,
        };
        Tasks.findOneAndUpdate(query, update, {upsert:true})
            .exec((err, returned) => {
                if(err) {
                    console.log('[ Error ] ' + err);
                    resposne.custom_reponse(req,res,'500','Error Occured When updating Task - ' + parms.tid);
                } else {
                    resposne.custom_reponse(req,res,'200','The following Task was updated - ' + parms.tid);
                }
            });
    }
};
/*********************************************************************************************************************/
// Updates record in database
/*********************************************************************************************************************/
function insert_one (req, res) {
    let parms = resposne.get_parms(req);
    if(
        parms.tasks_name != null &&
        parms.task_status != null &&
        parms.tasks_time != null &&
        parms.tasks_project != null &&
        parms.tasks_owners != null &&
        parms.tasks_duedate != null
    ){
        let insert = new Tasks();
        insert.tasks_name = parms.tasks_name,
        insert.tasks_status = parms.task_status,
        insert.tasks_time = parms.tasks_time,
        insert.tasks_project = parms.tasks_project,
        insert.tasks_owners = parms.tasks_owners,
        insert.tasks_duedate = parms.tasks_duedate

        insert.save((err, returned) => {
                if(err) {
                    console.log('[ Error ] ' + err);
                    resposne.custom_reponse(req,res,'500','Error Occured When adding Task');
                } else {
                    console.log(returned);
                    resposne.custom_reponse(req,res,'200','The following Task was added - ' + returned._id);
                }
        });
    }else{
        resposne.custom_reponse(req,res,'500','Missing Parameters - Can not add to Tasks.');
    }
};
/*********************************************************************************************************************/
// Sample Tasks
/*********************************************************************************************************************/
function sample_data (req, res) {
    console.log('[ INFO ] ' + 'inserting some tasks');
    let tasks = [
        {tasks_name : 'test1', task_status : 'Completed', tasks_time : '24', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/11/2019'},
        {tasks_name : 'test2', task_status : 'In Progress', tasks_time : '1', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/12/2019'},
        {tasks_name : 'test3', task_status : 'Completed', tasks_time : '2', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/01/2019'},
        {tasks_name : 'test4', task_status : 'Not Started', tasks_time : '5', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/02/2019'},
        {tasks_name : 'test5', task_status : 'Completed', tasks_time : '6', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/13/2019'},
        {tasks_name : 'test6', task_status : 'In Progress', tasks_time : '20', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/11/2019'},
        {tasks_name : 'test7', task_status : 'Completed', tasks_time : '21', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/12/2019'},
        {tasks_name : 'test8', task_status : 'In Progress', tasks_time : '22', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/01/2019'},
        {tasks_name : 'test9', task_status : 'In Progress', tasks_time : '25', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/02/2019'},
        {tasks_name : 'test10', task_status : 'Not Started', tasks_time : '36', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/13/2019'},
        {tasks_name : 'test11', task_status : 'Not Started', tasks_time : '16', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/11/2019'},
        {tasks_name : 'test12', task_status : 'Completed', tasks_time : '11', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/12/2019'},
        {tasks_name : 'test13', task_status : 'Completed', tasks_time : '12', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/01/2019'},
        {tasks_name : 'test14', task_status : 'In Progress', tasks_time : '15', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/02/2019'},
        {tasks_name : 'test15', task_status : 'Not Started', tasks_time : '46', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/13/2019'}
    ];
    Tasks.find({})
        .exec((err, returned) => {
            if(err) {
                console.log('[ Error ] ' + err);
                resposne.custom_reponse(req,res,'500','Error Occured When returning Tasks');
            } else {
                if(returned == ''){
                    Tasks.collection.insertMany(tasks, function (err, docs) {
                        if (err){
                            console.log('[ Error ] ' + err);
                            resposne.custom_reponse(req,res,'500','Error Occured When returning Tasks');
                        } else {
                            resposne.custom_reponse(req,res,'200','Inserting Tasks');
                        }
                    });
                }else{
                    resposne.custom_reponse(req,res,'500','Install of sample data failed');
                }
            }
        });
};
/*********************************************************************************************************************/
// Delete Sample Tasks
/*********************************************************************************************************************/
function remove_sample_data (req, res) {
    console.log('[ INFO ] ' + 'deleting some tasks');
    Tasks.remove(function (err, docs) {
        if (err){
            console.log('[ Error ] ' + err);
            resposne.custom_reponse(req,res,'500','Error Occured When deleting Tasks');
        } else {
            resposne.custom_reponse(req,res,'200','Deleting All Tasks');
        }
    });
};
/*********************************************************************************************************************/
// Module public methods
/*********************************************************************************************************************/
module.exports = {
    get_all : (req, res) => {
        tasks(req,res);
    },
    get_user_tasks : (req, res) => {
        tasks_by_user(req,res);
    },
    update_one : (req, res) => {
		update_by_id(req,res);
    },
    insert_one : (req, res) => {
		insert_one(req,res);
    },
    remove : (req, res) => {
        del_by_id(req,res);
    },
    sample_data : (req, res) => {
        sample_data(req,res);
    },
    sample_data_remove : (req, res) => {
        remove_sample_data(req,res);
    },
}
/*********************************************************************************************************************/
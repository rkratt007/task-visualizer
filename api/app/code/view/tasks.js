'use strict';
/*********************************************************************************************************************/
// Declared Module variables, constants, and objects
/*********************************************************************************************************************/
const mongoose = require('mongoose');
const resposne = require('../helper/response');
const Tasks = require('../models/tasks');
const dbinfo = require('../etc/mogodb');;

/*********************************************************************************************************************/
mongoose.Promise = global.Promise;
mongoose.connect(dbinfo.address(), { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

/*********************************************************************************************************************/
// Returns all tasks inside of the task schema
/*********************************************************************************************************************/
function tasks (req, res) {
    console.log('[ INFO ] ' + 'getting all tasks');
    Tasks.find({})
        .exec((err, returned) => {
            if(err) {
                console.log('[ Error ] ' + err);
                resposne.custom_reponse(req,res,'500','Error Occured When returning Tasks');
            } else {
                // console.log('[ INFO ] ' + JSON.stringify(returned));
                resposne.custom_reponse(req,res,'200',returned);
            }
        });
};
/*********************************************************************************************************************/
// Sample Tasks
/*********************************************************************************************************************/
function sample_data (req, res) {
    console.log('[ INFO ] ' + 'inserting some tasks');
    let tasks = [
        {id: '1', tasks_name : 'test1', tasks_time : '24', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/11/2019'},
        {id: '2', tasks_name : 'test2', tasks_time : '1', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/12/2019'},
        {id: '3', tasks_name : 'test3', tasks_time : '2', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/01/2019'},
        {id: '4', tasks_name : 'test4', tasks_time : '5', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/02/2019'},
        {id: '5', tasks_name : 'test5', tasks_time : '6', tasks_project : 'test', tasks_owners : 'Jill', tasks_duedate : '12/13/2019'},
        {id: '6', tasks_name : 'test1', tasks_time : '20', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/11/2019'},
        {id: '7', tasks_name : 'test2', tasks_time : '21', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/12/2019'},
        {id: '8', tasks_name : 'test3', tasks_time : '22', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/01/2019'},
        {id: '9', tasks_name : 'test4', tasks_time : '25', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/02/2019'},
        {id: '10', tasks_name : 'test5', tasks_time : '36', tasks_project : 'test', tasks_owners : 'John', tasks_duedate : '12/13/2019'},
        {id: '11', tasks_name : 'test1', tasks_time : '16', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/11/2019'},
        {id: '12', tasks_name : 'test2', tasks_time : '11', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/12/2019'},
        {id: '13', tasks_name : 'test3', tasks_time : '12', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/01/2019'},
        {id: '14', tasks_name : 'test4', tasks_time : '15', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/02/2019'},
        {id: '15', tasks_name : 'test5', tasks_time : '46', tasks_project : 'test', tasks_owners : 'Joe', tasks_duedate : '12/13/2019'}
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
                            // console.log('[ INFO ] ' + JSON.stringify(tasks));
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
// Test Output
/*********************************************************************************************************************/
function testoutput (req, res) {
    resposne.custom_reponse(req,res,'200','Testing output');
};

/*********************************************************************************************************************/
// Module public methods
/*********************************************************************************************************************/
module.exports = {
    get_all : (req, res) => {
        tasks(req,res);
    },
    get_user_colletion : (req, res) => {
        testoutput(req,res);
    },
    set_one : (req, res) => {
		testoutput(req,res);
    },
    remove : (req, res) => {
        testoutput(req,res);
    },
    sample_data : (req, res) => {
        sample_data(req,res);
    },
    sample_data_remove : (req, res) => {
        remove_sample_data(req,res);
    },
}
/*********************************************************************************************************************/
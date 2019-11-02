'use strict';

let resposne = require('../helper/response');

function testoutput (req, res) {
    resposne.custom_reponse(req,res,'200','Testing output');
};

module.exports = {
    get : (req, res) => {
		  testoutput(req,res);
    },
    set : (req, res) => {
		  testoutput(req,res);
    },
    full_collection : (req, res) => {
		  testoutput(req,res);
    },
    filtered_collection : (req, res) => {
		  testoutput(req,res);
	}

}
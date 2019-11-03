'use strict';

function _id_blank (req, res) {
	output_response(req, res, 500,"User id is empty. Please Try again.");
};

function _not_authorized (req, res) {
	output_response(req, res, 401,"Not Authorized");
};

function _invaild (req, res) {
	output_response(req, res, 404,"Invaild Endpoint");
};

function _place_holder (req, res) {
	output_response(req, res, 200,"Place Holder");
};

function output_response (req, res, output_code, output) {
	res.writeHead(output_code, {"Content-Type": 'application/json'});
	res.end(JSON.stringify({ code: output_code, result : {"Type":"Results","Output":output}}));
};


function _get_parms (req) {

	var parms = req.params;
	var body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
	var query = req.query;
	var myprams = {};
	let prop = '';

	prop = '';
	for (prop in parms ) {
		myprams[prop] = parms[prop];
	}

	prop = '';
	for (prop in body ) {
		myprams[prop] = body[prop];
	}

	prop = '';
	for (prop in query ) {
		myprams[prop] = query[prop];
	}

	return myprams;
};

module.exports = {
	id_blank : (req, res) => {
		_id_blank(req, res);
	},
	not_authorized : (req, res) => {
		_not_authorized(req, res);
    },
    invaild : (req, res) => {
		_invaild(req, res);
	},
	place_holder : (req, res) => {
		_place_holder(req, res);
	},
	custom_reponse : (req, res, output_code, output) => {
		output_response(req, res, output_code, output);
	},
	get_parms : (req, res) => {
		return _get_parms(req, res);
	},
}

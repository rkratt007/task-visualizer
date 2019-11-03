'use strict';
/*
 * This is express custom api with a custom mvc framework structure.
 */

let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    resposne = require('./app/code/helper/response'),
    routes = require('./app/code/routes/target'),
    cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true })),
app.use(bodyParser.json()),
app.use(bodyParser.text({ type: 'text/html' }));
app.use(cors());
routes(app);

app.use(function(req, res) {
  resposne.invaild(req, res);
});

app.listen(port);

console.clear();
console.log('[ INFO ] API server started on port: ' + port);


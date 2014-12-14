var express = require('express');
var router = express.Router();
var files = require('../mongoose/file');

/* GET home page. */
router.post('/', function(req, res) {
	files.uploadFile(req, res)
});

module.exports = router;

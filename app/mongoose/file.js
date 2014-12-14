var mongoose = require('mongoose');
var Grid = require('gridfs-stream');



var Schema = mongoose.Schema;


var options ={
	server: {},
	replset: {}
};

options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };

mongoose.connect('mongodb://localhost:27017/filedb');

var conn = mongoose.connection;




conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function callback () {
	var gfs = Grid(conn.db, mongoose.mongo);
	/*
	conn.db.collection('decisions', {strict:true}, function(err, collection) {
        if (err) {
            console.log("The 'decisions' collection doesn't exist. Creating it with sample data...");
            populateDB();
        }
    });
	*/
	console.log("Connected to 'decisiondb' database");
});



exports.uploadFile = function(req, res){

	console.log('Body');
	console.log(req.body);
	console.log('File');
    console.log(req.files);

	
    var file = req.files.file;
    var filename = file.originalname;
    var contentType = file.mimetype;

    if(!file) return res.send({result: 'NO_FILE_UPLOADED'});

    var writestream = gfs.createWriteStream({
        filename: filename,
        mode: 'w'
    });
	
    return res.send("OK");
 // more here but ommitted
 
 };
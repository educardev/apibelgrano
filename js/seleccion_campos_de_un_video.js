var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Conectado');
});
server.listen(3030);

var hostname = 'https://preprod-apibelgrano.educ.ar';
var path 	 = '/1.0/videos/';
var id		 = '40373';
var app_key  = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
var fields	 = [
	'id',
	'titulo',
	'video_sd',
	'video_hd',
	'canales',
	'autores'
];
var filters  = [];
var limit 	 = 10;

var params 	 = {
	app_key: app_key,
	fields: fields,
	filters: filters,
	limit: limit,
}

var query = encodeURIComponent(JSON.stringify(params));

var options = {
 		hostname: hostname,
	 	port: '8080',
 		path: path + id + '/' + query,
 		method: 'GET',
 		headers: { 'Content-Type': 'application/json' }
};

var req = http.request(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function (data) {
   		console.log( data ); 
	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
});

req.end();
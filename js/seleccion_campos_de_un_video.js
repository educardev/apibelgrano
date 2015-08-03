var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Conectado');
});
server.listen(3030);

var hostname = 'https://labs.educ.ar';
var path 	 = '/1.0/videos/';
var id		 = '40373';
var app_key  = '123';
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

var url = hostname + path + id + '/' + query;
console.log(url);
var request = require('/usr/local/lib/node_modules/request');
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log( body ) 
  } else {
  	console.log( error );
  }
});
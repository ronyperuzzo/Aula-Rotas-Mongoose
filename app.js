var http = require('http');
var Controller = require('./controller.js');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	var msg = '';
	var url = req.url;
	
	switch(url){
		case '/api/beers/create' :
			Controller.create(req, res);
			break;
		
		case '/api/beers/find' :
			Controller.find(req, res);
			break;
		
		case '/api/beers/update' :
			Controller.update(req, res);
			break;
		
		case '/api/beers/delete' :
			Controller.delete(req, res);
			break;

		
	}
	
	

}).listen(3000);

console.log('Server running at http://localhost:3000/');




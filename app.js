var http = require('http');
var Model = require('./model.js');

var fs = require('fs');

var Controller = {
	create: function(req, res){
		var dados = {
			name: 'Skol',
			description: 'mijo de rato',
			alcohol: 4.5,
			price: 3.0,
			category: 'pilse'
		};
		
		var model = new Model(dados);

		model.save(function (err, data){
			if (err){
				console.log('erro',err);
				msg = 'Erro: ' + err;
			} else {	
				console.log('Inserida', data);
				msg = 'Cerveja Inserida: ' + data;
			}
			res.end(msg);
		});
	
	},
	
	find: function(req, res){
		var Model = mongoose.model('Beer', BeerSchema), query ={};

		Model.find(query, function (err, data){
			if (err){
				console.log('erro', err);
				msg = 'Erro: ' + err;
			} else {
				console.log('Listagem', data);
				msg = 'Cervejas: ' + data;
			}
			res.end(msg);
		});
	
	},
	
	update: function(req, res){
		var Model = mongoose.model('Beer', BeerSchema), query = {name: /skol/i };

		var mod = {
			name: 'Brahma',
			alcohol: 4,
			price: 6,
			category: 'pilse'
		};

		var optional = {
			upsert: false,
			multi: true
		};

		Model.update(query, mod, optional, function (err, data){
			if (err){
				console.log('erro', err);
				msg = 'Erro: ' + err;
			} else {
				console.log('Cervejas Atualizadas com sucesso: ', data);
				msg = 'Cervejas atualizadas: ' + data;
			}
			res.end(msg);
		});
			
	},
	delete: function(req, res){
		var Model = mongoose.model('Beer', BeerSchema), query = {name: /brahma/i };

		Model.remove(query, function (err, data){
			if (err){
				console.log('erro', err);
			} else {
				console.log('Cervejas deletadas com sucesso: ', data.result);
				msg = 'Cervejas excluidas: ' + data;
			}
			res.end(msg);

		});
	}

}
	
	
	







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




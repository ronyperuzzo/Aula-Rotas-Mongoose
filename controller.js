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
		var query ={};

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
		var query = {name: /skol/i };

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
		var query = {name: /Skol/i };

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
	
module.exports = Controller;
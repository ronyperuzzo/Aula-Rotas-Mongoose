var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){ console.log('Erro de conexao.',err ) ;});
                             
db.on('open', function(){ console.log('Conexão Aberta') });
                             
db.on('conected', function(err){ console.log('Conectado') });
                             
db.on('disconnected', function(){ console.log('Conexão Aberta') });     


var json_schema= {
	name : { type: String, default: '' },
	description : { type: String, default: '' },
	alcohol : { type: Number, min: 0 },
	price : { type: Number, min: 0 },
	category : { type: String, default: '' },
}

var BeerSchema = new mongoose.Schema(json_schema);

var Beer = mongoose.model('Beer', BeerSchema);

var dados = {
	name: 'Skol',
	description: 'mijo de rato',
	alcohol: 4.5,
	price: 3.0,
	category: 'pilse'
};

var model = new Beer(dados);

model.save(function (err, data){
	if (err){
		console.log('erro',err);
	}
	console.log('Inserida', data);
});

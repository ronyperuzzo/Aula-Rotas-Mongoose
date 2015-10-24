var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){ console.log('Erro de conexao.',err ) ;});
                             
db.on('open', function(){ console.log('Conexão Aberta') });
                             
db.on('conected', function(err){ console.log('Conectado') });
                             
db.on('disconnected', function(){ console.log('Conexão Aberta') });     

var Schema = mongoose.Schema;

var json_schema= {
	name : { type: String, default: '' },
	description : { type: String, default: '' },
	alcohol : { type: Number, min: 0 },
	price : { type: Number, min: 0 },
	category : { type: String, default: '' },
}

var BeerSchema = new Schema(json_schema);

var Beer = mongoose.model('Beer', BeerSchema), query = {name: /brahma/i };

Beer.remove(query, function (err, data){
	if (err){
		console.log('erro', err);
	} else {
		console.log('Cervejas deletadas com sucesso: ', data.result);
	}
	//process.exit(0);
});

const mongoose = require('../config/database'); 

const Tesouro = mongoose.model('tesouro', {
  nome: {type: String, required: true, unique: true},
  taxa: {type: Number, required: true},
  ir: {type: Boolean, required: true},
  pais: {type: String, required: true},
  prefixado: {type: Boolean, required: true},
  vencimento: {type: Date, required: true, default:new Date().getDate()+1 }
});

module.exports = Tesouro;
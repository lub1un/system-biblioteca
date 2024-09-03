const mongoose = require('mongoose')

const estudanteModel = new mongoose.Schema({
    nome: { type: String, required: true},
    inscrição: { type: String, required: true},
    curso: { type: String, required: true},
    ano: { type: Number, required: true},
});

module.exports = mongoose.model('Estudante', estudanteModel)
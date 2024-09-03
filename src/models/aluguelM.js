const mongoose = require('mongoose');

const alguelModel = new mongoose.Schema({
    livro_id: { type: mongoose.Schema.Types.Id, ref: 'Livro', required: true },
    estudante_id: { type: mongoose.Schema.Types.Id, ref: 'Estudante', required: true },
    aluguel_date: { type: Date, default: Date.now },
    retorno_date: { type: Date }
});

module.exports = mongoose.model('Aluguel', alguelModel);
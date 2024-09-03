const mongoose = require('mongoose')

const livroModel = new mongoose.Schema({
    tituloitulo: { type: String, required: true},
    autor: { type: String, required: true},
    ano: { type: Number, required: true},
    genero: { type: String, required: true}
});

module.exports = mongoose.model('Livro', livroModel)
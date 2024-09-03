const express = require('express');
const Router = express.Router();
const livroC = require('../controllers/livroC');

// Rota para criar um livro
Router.post('/', livroC.livro);

// Rota para listar todos os livros
Router.get('/', livroC.allLivros);

// Rota para obter um livro por ID
Router.get('/:id', livroC.livroID);

// Rota para atualizar um livro
Router.put('/:id', livroC.atualizarLivro);

// Rota para deletar um livro
Router.delete('/:id', livroC.deletarLivro);

module.exports = Router;
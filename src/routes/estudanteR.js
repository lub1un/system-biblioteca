const express = require('express');
const Router = express.Router();
const estudanteC = require('../controllers/estudanteC');

// Rota para criar um estudante
Router.post('/', estudanteC.criarEstudante);

// Rota para listar todos os estudantes
Router.get('/', estudanteC.allEstudantes);

// Rota para obter um estudante por ID
Router.get('/:id', estudanteC.idEstudante);

// Rota para atualizar um estudante
Router.put('/:id', estudanteC.atualizarEstudante);

// Rota para deletar um estudante
Router.delete('/:id', estudanteC.deleteEstudante);

module.exports = Router;
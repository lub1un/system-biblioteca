const express = require('express');
const app = express.Router();
const aluguelC = require('../controllers/aluguelC');

// Rota para criar um aluguel
app.post('/', aluguelC.criarAluguel);

// Rota para listar todos os aluguéis
app.get('/', aluguelC.allAluguel);

// Rota para obter um aluguel por ID
app.get('/:id', aluguelC.idAluguel);

// Rota para atualizar um aluguel
app.put('/:id', aluguelC.atualizarAluguel);

// Rota para deletar um aluguel
app.delete('/:id', aluguelC.deleteAluguel);

module.exports = app;
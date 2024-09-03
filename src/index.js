const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const livroR = require('./routes/livroR')
const estudanteR = require('./routes/estudanteR')
const aluguelR = require('./routes/aluguelR')

const index = express();
const port = 3000

index.use(bodyParser.json())

mongoose.connect('mongodb://localhost/library',
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Servidor Conectado'))
    .catch((err) => console.error('Erro ao se Conectar', err));

index.use('/livros', livroR);
index.use('/estudante', estudanteR);
index.use('/aluguel', aluguelR);

application.listen(port, () => {
    console.log(`Servidor rodando na Porta ${port}`)
})
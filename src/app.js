const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/bookRoutes');
const studentRoutes = require('./routes/studentRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/library', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB', err));

app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/rentals', rentalRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

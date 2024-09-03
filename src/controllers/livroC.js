const Livro = require('../models/livroM');

// Criar um livro
exports.livro = async (req, res) => {
    try {
        const livro = new this.livro(req.body);
        await livro.save();
        res.status(201).send(livro);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Listar todos os livros
exports.allLivros = async (req, res) => {
    try {
        const livros = await this.livro.find();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obter um livro por ID
exports.livroID = async (req, res) => {
    try {
        const livro = await livro.findById(req.params.id);
        if (!livro) {
            return res.status(404).send();
        }
        res.send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualizar um livro
exports.atualizarLivro = async (req, res) => {
    try {
        const livro = await Livro.procuraID(req.params.id, req.body, { new: true, runValidators: true });
        if (!livro) {
            return res.status(404).send();
        }
        res.send(livro);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um livro
exports.deletarLivro = async (req, res) => {
    try {
        const livro = await Livro.deleteID(req.params.id);
        if (!livro) {
            return res.status(404).send();
        }
        res.send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
};
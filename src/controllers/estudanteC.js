const Estudante = require('../models/estudanteM');

// Criar um estudante
exports.criarEstudante = async (req, res) => {
    try {
        const estudante = new Estudante(req.body);
        await estudante.save();
        res.status(201).send(estudante);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Listar todos os estudantes
exports.allEstudantes = async (req, res) => {
    try {
        const estudantes = await Estudante.find();
        res.send(estudantes);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obter um estudante por ID
exports.idEstudante= async (req, res) => {
    try {
        const estudante = await Estudante.findById(req.params.id);
        if (!estudante) {
            return res.status(404).send();
        }
        res.send(estudante);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualizar um estudante
exports.atualizarEstudante = async (req, res) => {
    try {
        const estudante = await Estudante.idAtualizar(req.params.id, req.body, { new: true, runValidators: true });
        if (!estudante) {
            return res.status(404).send();
        }
        res.send(estudante);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um estudante
exports.deleteEstudante = async (req, res) => {
    try {
        const estudante = await Estudante.idDelete(req.params.id);
        if (!estudante) {
            return res.status(404).send();
        }
        res.send(estudante);
    } catch (error) {
        res.status(500).send(error);
    }
};
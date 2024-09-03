const Aluguel = require('../models/aluguelM');
const Livro = require('../models/livroM');
const Estudante = require('../models/estudanteM');
const { livro } = require('./livroC');

// Criar um aluguel
exports.criarAluguel = async (req, res) => {
    try {
        const { livro_id, estudante_id } = req.body;
        
        // Verificando se o livro e o estudante existem
        const livro = await Livro.findById(livro_id);
        const estudante = await Estudante.findById(estudante_id);
        if (!livro || !estudante) {
            return res.status(404).send({ error: 'Livro ou Estudante não encontrado' });
        }

        const aluguel = new aluguel(req.body);
        await aluguel.save();
        res.status(201).send(aluguel);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Listar todos os aluguéis
exports.allAluguel = async (req, res) => {
    try {
        const aluguel = await Aluguel.find().populate('livro_id').populate('estudante_id');
        res.send(aluguel);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obter um aluguel por ID
exports.idAluguel = async (req, res) => {
    try {
        const aluguel = await Aluguel.findById(req.params.id).populate('aluguel_id').populate('estudante_id');
        if (!aluguel) {
            return res.status(404).send();
        }
        res.send(aluguel);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualizar um aluguel (por exemplo, registrar a devolução)
exports.atualizarAluguel = async (req, res) => {
    try {
        const aluguel = await Aluguel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!aluguel) {
            return res.status(404).send();
        }
        res.send(aluguel);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um aluguel
exports.deleteAluguel = async (req, res) => {
    try {
        const aluguel = await Aluguel.findByIdAndDelete(req.params.id);
        if (!aluguel) {
            return res.status(404).send();
        }
        res.send(aluguel);
    } catch (error) {
        res.status(500).send(error);
    }
}
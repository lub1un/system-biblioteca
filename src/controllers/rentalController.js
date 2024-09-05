const Rental = require('../models/rentalModel');
const Book = require('../models/bookModel');
const Student = require('../models/studentModel');

// Criar um aluguel
exports.createRental = async (req, res) => {
    try {
        const { book_id, student_id } = req.body;
        
        // Verificando se o livro e o estudante existem
        const book = await Book.findById(book_id);
        const student = await Student.findById(student_id);
        if (!book || !student) {
            return res.status(404).send({ error: 'Livro ou Estudante não encontrado' });
        }

        const rental = new Rental(req.body);
        await rental.save();
        res.status(201).send(rental);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Listar todos os aluguéis
exports.getAllRentals = async (req, res) => {
    try {
        const rentals = await Rental.find().populate('book_id').populate('student_id');
        res.send(rentals);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obter um aluguel por ID
exports.getRentalById = async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id).populate('book_id').populate('student_id');
        if (!rental) {
            return res.status(404).send();
        }
        res.send(rental);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Atualizar um aluguel (por exemplo, registrar a devolução)
exports.updateRental = async (req, res) => {
    try {
        const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!rental) {
            return res.status(404).send();
        }
        res.send(rental);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um aluguel
exports.deleteRental = async (req, res) => {
    try {
        const rental = await Rental.findByIdAndDelete(req.params.id);
        if (!rental) {
            return res.status(404).send();
        }
        res.send(rental);
    } catch (error) {
        res.status(500).send(error);
    }
};


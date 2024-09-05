const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    enrollment: { type: String, required: true },
    course: { type: String, required: true },
    year: { type: Number, required: true }
});

module.exports = mongoose.model('Student', studentSchema);

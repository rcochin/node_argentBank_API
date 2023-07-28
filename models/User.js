const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdAt: { type: Date, required: false },
    updatedAt: { type: Date, required: false }
})

module.exports = mongoose.model('User', userSchema);
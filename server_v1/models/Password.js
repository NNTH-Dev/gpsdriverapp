const mongoose = require('mongoose');

const { Schema } = mongoose;

const PasswordSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    accountId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('password', PasswordSchema);
const mongoose = require('mongoose');

const { Schema } = mongoose;

const TokenSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    accountId: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('token', TokenSchema);

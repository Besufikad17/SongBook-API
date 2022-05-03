const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    registerd_date: {
        type: Date,
        default: Date.now
    },
    favourite: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("User", userSchema)
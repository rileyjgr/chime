const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    title: String,
    company: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;


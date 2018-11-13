const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fbSchema = new Schema({
    message: String
});

const Feedback = mongoose.model('feedback', fbSchema);

module.exports = Feedback;


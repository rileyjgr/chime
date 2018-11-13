const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    event: String,
    date: Date,
    time: Date,
    people: String
});

const Event = mongoose.model('events', eventSchema);

module.exports = Event;


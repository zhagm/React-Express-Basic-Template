const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
  name: { type: String, default: 'name' },
  timeStamp: { type: Date, default: Date.now }
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing;

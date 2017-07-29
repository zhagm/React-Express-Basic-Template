const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
  name: {
    first: { type: String, minlength: 1 },
    last:  { type: String }
  },
  age: { type: Number, min: 1, max: 150 },
  gender: { type: String, enum: ['male', 'female', 'other']},
  tags: [ { type: String } ],
  timeStamp: { type: Date, default: Date.now }
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing;

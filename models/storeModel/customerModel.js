const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: String,
  address: String
});

module.exports = mongoose.model('Customer', CustomerSchema);
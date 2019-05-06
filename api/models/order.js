const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  items: String,
  price: Number
});

module.exports = mongoose.model('Order', orderSchema);

//5c4faa138d9e2f528888d230

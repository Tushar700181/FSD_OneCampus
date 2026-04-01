const mongoose = require('mongoose');
const cafeItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    available: Boolean
});
module.exports = mongoose.model('CafeItem', cafeItemSchema);

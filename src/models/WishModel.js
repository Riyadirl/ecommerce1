const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },

},
    { timestamps: true, versionKey: false })


const WishModel = mongoose.model('wishes', DataSchema);
module.exports = WishModel;
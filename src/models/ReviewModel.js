const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
    rating: { type: String, required: true },
    des: { type: String, required: true },

},
    { timestamps: true, versionKey: false })


const ReviewModel = mongoose.model('reviews', DataSchema);
module.exports = ReviewModel;
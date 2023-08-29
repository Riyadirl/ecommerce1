const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    shortDes: { type: String, trim: true, required: true },
    price: { type: String, trim: true, required: true },
    discount: { type: Boolean, trim: true, default: false },
    discountPrice: { type: String, trim: true },
    image: { type: String, trim: true, required: true },
    star: { type: Number, trim: true, required: true },
    stock: { type: Boolean, trim: true, required: true, default: true },
    remarks: { type: String, trim: true, required: true, enum: ['new', 'trending', 'popular', 'top', 'speacial', 'regular'] },

},
    { timestamps: true, versionKey: false })

const ProductModel = mongoose.model('products', DataSchema);
module.exports = ProductModel;
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'invoices', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
    qty: { type: String, required: true },
    price: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
},
    { timestamps: true, versionKey: false })

const InvoiceProductModel = mongoose.model('invoiceProducts', DataSchema);
module.exports = InvoiceProductModel;
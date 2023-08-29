const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    brandName: { type: String, trim: true, required: true, unique: true },
    brandImg: { type: String, trim: true, required: true },
},
    { timestamps: true, versionKey: false })


const BrandModel = moongose.model('brands', DataSchema);
module.exports = BrandModel;

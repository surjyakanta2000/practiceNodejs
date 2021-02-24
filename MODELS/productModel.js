const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _title:{
        type: String,
        required: true
    },
    _description:{
        type: String,
        required: true
    },
    _price:{
        type: Number,
        required: true
    },
    _image:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ShopProduct',ProductSchema);
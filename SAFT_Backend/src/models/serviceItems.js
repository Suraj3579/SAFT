const mongoose = require('mongoose');
const serviceItemsSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    slug: { 
        type: String, 
        required: true, 
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    parentId: {
        type: String,
    },
    serviceItemsPictures: [
        { img: { type: String } }
    ],
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    updatedAt: Date,

}, { timestamps: true });


module.exports = mongoose.model('ServiceItems', serviceItemsSchema);
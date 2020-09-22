const mongoose = require("mongoose");
const Schema = require('mongoose').Schema;

module.exports = new Schema({

    name: String,
    images: [String],
    isAuctionItem: {type: Boolean, default: false, required: true},
    title: {type: String, required: true},
    artistId: {type: mongoose.ObjectId, required: true},
    date: {type: Date, required: true , default: Date.now},
    description: String

});


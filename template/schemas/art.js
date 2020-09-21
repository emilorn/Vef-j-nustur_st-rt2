const mongoose = require("mongoose");
const Schema = require('mongoose').Schema;

module.exports = new Schema({

    name: String,
    images: [String],
    isAuctionItem: Boolean,
    title: {type: String, required: true},
    artistId: {type: mongoose.ObjectId, required: true},
    date: {type: Date, required: true},
    description: String

});


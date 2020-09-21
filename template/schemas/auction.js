const mongoose = require("mongoose");
const Schema = require('mongoose').Schema;

module.exports = new Schema({

    artId: {type: mongoose.ObjectId, required: true},
    minimumPrice: Number,
    endDate: {type: Date,  required: true},
    auctionWinner: {type: mongoose.ObjectId}

});

const mongoose = require('mongoose');
const artSchema = require('../schemas/art');
const artistSchema = require('../schemas/artist');
const auctionSchema = require('../schemas/auction');
const auctionBidSchema = require('../schemas/auctionBid');
const customerSchema = require('../schemas/customer');

/*
const connection = mongoose.createConnection('mongodb+srv://the_guy:<password>@cluster0.l96sg.azure.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    (error, client) => {
        if(error) {
            throw new Error(error);}

        console.log("Successfully connected to the Database.");

        client.close();
    }
    );
*/

const connection = mongoose.createConnection('mongodb+srv://loki:the_guy1@cluster0.l96sg.azure.mongodb.net/the_thing1',
    { useNewUrlParser: true });

module.exports = {
    Art: connection.model('Art', artSchema),
    Artist: connection.model('Artist', artistSchema),
    Auction: connection.model('Auction', auctionSchema),
    AuctionBid: connection.model('AuctionBid', auctionBidSchema),
    Customer: connection.model('Customer', customerSchema)
};

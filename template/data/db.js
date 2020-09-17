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


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://loki:the_guy1@cluster0.l96sg.azure.mongodb.net/the_thing?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("the_thing").collection("the_thing");
    // perform actions on the collection object
    collection.insertOne({lel:'d'});
    client.close();
});
/*
const connection = mongoose.createConnection('mongodb+srv://loki:the_guy1@cluster0.l96sg.azure.mongodb.net/the_thing1',
    { useNewUrlParser: true });


module.exports = {
    Art: client.model('Art', artSchema),
    Artist: client.model('Artist', artistSchema),
    Auction: client.model('Auction', auctionSchema),
    AuctionBid: client.model('AuctionBid', auctionBidSchema),
    Customer: client.model('Customer', customerSchema)
};
*/
// Here the web service should be setup and routes declare

const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const artService = require('./services/artService');
const artistService = require('./services/artistService');
const customerService = require('./services/customerService');
const auctionService = require('./services/auctionService');

const mongoose = require('mongoose');

const server = express();

server.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

server.get("/api/arts", async function(request, response){
    let arts = await artService.getAllArts();
    response.status(200);
    return response.json(arts);
});


server.get("/api/arts/:id", async function(request, response){
    let id = request.params.id;
    if(mongoose.isValidObjectId(id)){
        const art = await artService.getArtById(id);
        if(!(art instanceof Error)){
            response.status(200);
            return response.json(art);
        }
        else{
            response.status(404);
            return response.json(art.message)
        }
    }
    else{
        return response.status(404).message("Not a valid art id");
    }



});


server.get("/api/artists", async function(request, response) {
    const artists = await artistService.getAllArtists();
    response.status(200);
    return response.json(artists);
});


server.get("/api/artists/:id", async function(request, response){
    let id = request.params.id;
    if(mongoose.isValidObjectId(id)){

        let artist = await artistService.getArtistById(id);
        if(!(artist instanceof Error)){
            response.status(200);
            return response.json(artist);
        }
        else{
            response.status(404);
            return response.json(artist.message)
        }
    }
    else{
        return response.status(404).message("Not a valid artist id");
    }
});


server.get('/api/customers', async function(request, response) {
    const customers = await customerService.getAllCustomers();
    response.status(200);
    return response.json(customers);
});


server.get("/api/customers/:id", async function(request, response){
    let id = request.params.id;
    if(mongoose.isValidObjectId(id)){
        let customer = await customerService.getCustomerById(id);
        if(!(customer instanceof Error)){
            response.status(200);
            return response.json(customer);
        }
        else{
            response.status(404);
            return response.json(customer.message)
        }
    }
    else{
        return response.status(404).message("Not a valid customer id");
    }
});


server.get("/api/customers/:id/auction-bids", async function(request, response){
    let id = request.params.id;
    if(mongoose.isValidObjectId(id)){
        let customer_bids = await customerService.getCustomerAuctionBids(id);
        response.status(200);
        if(!(customer_bids instanceof Error)){
            response.status(200);
            return response.json(customer_bids);
        }
        else{
            response.status(404);
            return response.json(customer_bids.message)
        }
    }
    else{
        return response.status(404).message("Not a valid customer id");
    }

});


server.get("/api/auctions", async function(request, response){
    let auctions = await auctionService.getAllAuctions();
    response.status(200);
    return response.json(auctions);
});


server.get("/api/auctions/:id", async function(request, response){
    let id = request.params.id;
    if(mongoose.isValidObjectId(id)){
        let auction = await auctionService.getAuctionById(id);
        response.status(200);
        if(!(auction instanceof Error)){
            response.status(200);
            return response.json(auction);
        }
        else{
            response.status(404);
            return response.json(auction.message)
        }
    }
    else{
        return response.status(404).message("Not a valid auction id");
    }

});


server.get("/api/auctions/:id/winner", async function(request, response){
    let id = request.params.id;
    if(mongoose.isValidObjectId(id)){
        let auction_winner = await auctionService.getAuctionWinner(id);
        if(!(auction_winner instanceof Error)){
            response.status(200);
            return response.json(auction_winner);
        }
        else{
            response.status(404);
            return response.json(auction_winner.message)
        }
    }
    else{
        return response.status(404).message("Not a valid auction id");
    }
});


server.get("/api/auctions/:id/bids", async function(request, response){
    let id = request.params.id;
    if(mongoose.isValidObjectId(id)){
        let auction_bids = await auctionService.getAuctionBidsWithinAuction(id);
        if(!(auction_bids instanceof Error)){
            response.status(200);
            return response.json(auction_bids);
        }
        else{
            response.status(404);
            return response.json(auction_bids.message)
        }
    }
    else{
        return response.status(404).message("Not a valid auction id");
    }

});

//==================== POST ======================================



server.post("/api/arts", (request, response) => {
    const art = request.body;
    artService.createArt(art, function (returned_art){
        return response.status(200).json(returned_art);
    },
        function (error){
        return response.status(400).json(error)
        });
});



server.post("/api/artists", (request, response) => {

    const artist = request.body;
    artistService.createArtist(artist, function (returned_artist){
            return response.status(200).json(returned_artist);
        },
        function (error){
            return response.status(400).json(error)
        });
});



server.post("/api/customers", (request, response) => {
    const costumer = request.body;
    customerService.createCustomer(costumer, function (returned_costumer){
            return response.status(200).json(returned_costumer);
        },
        function (error){
            return response.status(400).json(error)
        });
});



server.post("/api/auctions", (request, response) => {
    const auction = request.body;
    auctionService.createAuction(auction, function (returned_auction){

            return response.status(200).json(returned_auction);
        },
        function (error){
        if(error == "An auction for this art already exists"){
            return response.status(409).json(error)
        }
        else if(error == "Art is not an auction item"){
            return response.status(412).json(error)
        }
        else if(error =="Art not found"){
            return response.status(404).json(error)
        }
        else{
            return response.status(520).json(error)
        }

        });
});


server.post("/api/auctions/:id/bids", (request, response) => { //auctionId, customerId, price, cb, errorCb
    const body = request.body;
    let id = request.params.id;// IDk man
    let validID = mongoose.isValidObjectId(id);
    let validCustomerId = mongoose.isValidObjectId(body.customerId);
    if(validID && validCustomerId){
        auctionService.placeNewBid(id, body.customerId, body.price, function (returned_art){
                return response.status(200).json(returned_art);
            },
            function (error){
                if(error == "Customer not found"){

                    return response.status(404).json(error)
                }
                else if(error == "Auction not found"){

                    return response.status(404).json(error)
                }
                else if(error == "Price too low"){
                    return response.status(412).json(error)
                }

                return response.status(520).json(error)
            });
    }
    else{
        if(!validID){
            return response.status(404).message("Not a valid auction id");
        }
        if(!validCustomerId){
            return response.status(404).message("Not a valid customer id");
        }
    }

});


//==========================================================================


















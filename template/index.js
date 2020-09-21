// Here the web service should be setup and routes declare

const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const artService = require('./services/artService');
const artistService = require('./services/artistService');
const customerService = require('./services/customerService');
const auctionService = require('./services/auctionService');

const server = express();

server.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

server.get("/api/arts", (request, response) => {
    response.status(200);
    let arts = artService.getAllArts();
    return response.status(200).send(arts)
});


server.get("/api/arts/:id", (request, response) => {
    let id = request.params.id;
    console.log(id);
    let art = artService.getArtById(id);
    response.status(200);
    return response.json({"Hah": "lol"})
});


server.get("/api/artists", (request, response) => {
    console.log(request);
    let artists = artistService.getAllArtists();
    response.status(200).send(artists);
});


server.get("/api/artist/:id", (request, response) => {
    let id = request.params.id;
    let artist = artistService.getArtistById(id);
    console.log(request);
    response.status(200);
});

server.get("/api/customers", (request, response) => {
    console.log(request);
    let customers = customerService.getAllCustomers();
    response.status(200);
});


server.get("/api/customers/:id", (request, response) => {
    let id = request.params.id;
    let customer = customerService.getCustomerById(id);
    response.status(200);
});


server.get("/api/customers/:id/auction-bids", (request, response) => {
    let id = request.params.id;
    let customer_bids = customerService.getCustomerAuctionBids(id);
    response.status(200);
});


server.get("/api/auctions", (request, response) => {
    console.log(request);
    let auctions = auctionService.getAllAuctions();
    response.status(200);
});


server.get("/api/auctions/:id", (request, response) => {
    let id = request.params.id;
    let auction = auctionService.getAuctionById(id);
    response.status(200);
});


server.get("/api/auctions/:id/winner", (request, response) => {
    let id = request.params.id;
    let auction_vinner = auctionService.getAuctionWinner(id);
    console.log(request);
    response.status(200);
});


server.get("/api/auctions/:id/bids", (request, response) => {
    let id = request.params.id;
    let auction_bids = auctionService.getAuctionBidsWithinAuction(id);
    console.log(request);
    response.status(200);
});

//==================== POST ======================================



server.post("/api/arts", (request, response) => {
    const art = request.body;
    artService.createArt(art, function (art){
        return response.status(200).json(art);
    },
        function (error){
        return response.status(400).json(error)
        });
});



server.post("/api/artists", (request, response) => {

    const artist = request.body;
    artistService.createArtist(artist, function (artist){
            return response.status(200).json(artist);
        },
        function (error){
            return response.status(400).json(error)
        });
});



server.post("/api/customers", (request, response) => {
    console.log(request);
    response.status(201);
});



server.post("/api/auctions", (request, response) => {
    console.log(request);
    response.status(201);
});


server.post("/api/auctions/:id/bids", (request, response) => {
    let id = request.params.id;
    console.log(request);
    response.status(201);
});


//==========================================================================


















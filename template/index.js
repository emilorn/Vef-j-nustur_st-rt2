// Here the web service should be setup and routes declare

const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const artService = require('./services/artService');

const server = express();


server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

server.get("/api/arts", (request, response) => {
    console.log(request);
    response.status(200);
    artService.getAllArts();
    return response.json({"Hah": "lol"})
});


server.get("/api/arts/:id", (request, response) => {
    let id = request.params.id;
    console.log(id);
    response.status(200);
    return response.json({"Hah": "lol"})
});


server.get("/api/artists", (request, response) => {
    console.log(request);
    response.status(200).send();
});


server.get("/api/artist/:id", (request, response) => {
    let id = request.params.id;
    console.log(request);
    response.status(200);
});

server.get("/api/customers", (request, response) => {
    console.log(request);
    response.status(200);
});


server.get("/api/customers/:id", (request, response) => {
    let id = request.params.id;
    console.log(request);
    response.status(200);
});


server.get("/api/customers/:id/auction-bids", (request, response) => {
    let id = request.params.id;
    console.log(request);
    response.status(200);
});


server.get("/api/auctions", (request, response) => {
    console.log(request);
    response.status(200);
});


server.get("/api/auctions/:id", (request, response) => {
    let id = request.params.id;
    console.log(request);
    response.status(200);
});


server.get("/api/auctions/:id/winner", (request, response) => {
    let id = request.params.id;
    console.log(request);
    response.status(200);
});


server.get("/api/auctions/:id/bids", (request, response) => {
    let id = request.params.id;
    console.log(request);
    response.status(200);
});

//==================== POST ======================================



server.post("/api/arts", (request, response) => {
    console.log(request);
    response.status(201);
});



server.post("/api/artists", (request, response) => {
    console.log(request);
    response.status(201);
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


















const artData = require('../data/db');


const artService = () => {
    const getAllArts = (cb, errorCb) => {
        // Your implementation goes here
        artData.insertOne(
            {Artist: "mambo number six"}
        );
        console.log("lol am in get all arts!")
    };

    const getArtById = (id, cb, errorCb) => {
        // Your implementation goes here
    };

    const createArt = (art, cb, errorCb) => {
        // Your implementation goes here
    };

    return {
        getAllArts,
        getArtById,
        createArt
    };
};

module.exports = artService();

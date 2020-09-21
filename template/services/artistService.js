const artistData = require('../data/db').Artist;

const artistService = () => {
    const getAllArtists = (cb, errorCb) => {

        // Your implementation goes here
    };

    const getArtistById = (id, cb, errorCb) => {

        // Your implementation goes here
    };


    const createArtist = (artist, callBack, errorCallBack) => {
        // Your implementation goes here
        artistData.create(artist, function(error, result){
            if (error) { errorCallBack(error); }
            else { callBack(result); }
        })
    };
    return {
        getAllArtists,
        getArtistById,
        createArtist
    };
};

module.exports = artistService();

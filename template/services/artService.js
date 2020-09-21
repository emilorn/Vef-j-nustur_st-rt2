const artData = require('../data/db').Art;


const artService = () => {

    const globalTryCatch = async cb => {
        try {
            return await cb();
        } catch(err) {
            return err;
        }
    };


    const    getAllArts = async () => {
        return await globalTryCatch(async () => {
            return await artData.find({});
        });
    };


    const getArtById = async id => {
        try {
            return await artData.findById(id);
        } catch (error) {
            return error;
        }
    };

    const createArt = (art, callBack, errorCallBack) => {
        // Your implementation goes here
        artData.create(art, function(error, result){
            if (error) { errorCallBack(error); }
            else { callBack(result); }
        })
    };

    return {
        getAllArts,
        getArtById,
        createArt
    };
};

module.exports = artService();

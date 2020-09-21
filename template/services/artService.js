const artData = require('../data/db').Art;


const artService = () => {

    const globalTryCatch = async cb => {
        try {
            return await cb();
        } catch(err) {
            return err;
        }
    }


    const    getAllArts = async () => {
        return await globalTryCatch(async () => {
            const arts = await artData.find({});
            return arts;
        });
    }



    const getArtById = (id, callBack, errorCallBack) => {
        // Your implementation goes here
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

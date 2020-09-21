const auctionData = require('../data/db').Auction;
const bidData = require('../data/db').AuctionBid;


const auctionService = () => {

    const globalTryCatch = async cb => {
        try {
            return await cb();
        } catch(err) {
            return err;
        }
    };

    const getAllAuctions = async () => {
        return await globalTryCatch(async () => {
            return await auctionData.find({});
        });
    };

    const getAuctionById = async id => {
        try {
            return await auctionData.findById(id);
        } catch (error) {
            return error;
        }
    };

    const getAuctionWinner = (auctionId, cb, errorCb) => {
        // Your implementation goes here
    };


    const createAuction = (auction, callBack, errorCallBack) => {
        // Your implementation goes here
        auctionData.create(auction, function(error, result){
            if (error) { errorCallBack(error); }
            else { callBack(result); }
        })
    };

	const getAuctionBidsWithinAuction = (auctionId, cb, errorCb) => {
        // Your implementation goes here
    };

	const placeNewBid = (auctionId, customerId, price, cb, errorCb) => {
		// Your implementation goes here
	};

    return {
        getAllAuctions,
        getAuctionById,
        getAuctionWinner,
		createAuction,
		getAuctionBidsWithinAuction,
		placeNewBid
    };
};

module.exports = auctionService();

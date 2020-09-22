const auctionData = require('../data/db').Auction;
const bidData = require('../data/db').AuctionBid;
const artData = require('../data/db').Art;
const getCustomerById = require('./customerService').getCustomerById;



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
            else {
                artData.updateOne({
                    id: auction.artId
                }, {
                    isAuctionItem : true
                }, (error, response) => {
                    if(error){
                        throw new Error(error)
                    }
                    else{
                        callBack(result);
                        console.log("Art successfully turned into an auction item")
                    }
                })


            }
        })
    };

	const getAuctionBidsWithinAuction = async auctionId => {
        // Your implementation goes here
        try {
            return await bidData.find({"auctionId" : auctionId});
        } catch (error) {
            return error;
        }


    };

	const placeNewBid = async function (auctionId, customerId, price, callBack, errorCallBack){
		// Your implementation goes here

        const customer = await getCustomerById(customerId);
        if(customer._doc){
            const auction = await getAuctionById(auctionId);
            if(auction._doc){
                const auction_bid = await getAuctionBidsWithinAuction(auctionId);

                if(auction._doc.minimumPrice > price){
                    return errorCallBack("Price too low")
                }

                bidData.create({
                    auctionId : auctionId,
                    customerId : customerId,
                    price: price
                }, function(error, result) {
                    if (error) {
                        errorCallBack(error);
                    } else {

                        callBack(result);
                    }
                })

            }
            else {
                return errorCallBack("Auction not found");
            }
        }
        else{
            return errorCallBack("Customer not found");
        }

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

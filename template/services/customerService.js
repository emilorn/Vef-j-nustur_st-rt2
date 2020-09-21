const customerData = require('../data/db').Customer;



const customerService = () => {

    const globalTryCatch = async cb => {
        try {
            return await cb();
        } catch(err) {
            return err;
        }
    };

    const getAllCustomers = async () => {
        return await globalTryCatch(async () => {
            return await customerData.find({});
        });
    };


    const getCustomerById = async id => {
        try {
            return await customerData.findById(id);
        } catch (error) {
            return error;
        }
    };

    const getCustomerAuctionBids = (customerId, cb, errorCb) => {
        // Your implementation goes here
    };

    const createCustomer = (customer, callBack, errorCallBack) => {
        // Your implementation goes here
        customerData.create(customer, function(error, result){
            if (error) { errorCallBack(error); }
            else { callBack(result); }
        })
    };

    return {
        getAllCustomers,
        getCustomerById,
        getCustomerAuctionBids,
		createCustomer
    };
};

module.exports = customerService();

const customerData = require('../data/customer.data');

exports.create = async (customer) => {
    return await customerData.create(customer);
}

exports.findAll = async () => {
    return await customerData.findAll();
}

exports.find = async (id) => {
    return await customerData.find(id);
}

exports.update = async (id, customer) => {
    return await customerData.update(id, customer);
}

exports.delete = async (id) => {
    return await customerData.delete(id);
}


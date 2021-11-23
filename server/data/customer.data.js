const {Customer} = require('../models');

exports.create = async (customer) => {
    return await Customer.create(customer);
}

exports.findAll = async () => {
    return await Customer.findAll();
}

exports.find = async (id) => {
    const customerFound = await Customer.findByPk(id);
    if (!customerFound) throw {code: 404, message: "Cliente não encontrado"};

    return await Customer.findByPk(id);
}

exports.update = async (id, customer) => {
    const customerFound = await Customer.findByPk(id);

    if (!customerFound) throw {code: 404, message: "Cliente não encontrado"};

    customerFound.name = customer.name ? customer.name : customerFound.name;
    customerFound.birthdate = customer.birthdate ? customer.birthdate : customerFound.birthdate;
    customerFound.address = customer.address ? customer.address : customerFound.address;

    return await customerFound.save();
}

exports.delete = async (id) => {
    const customerFound = await Customer.findByPk(id);
    if (!customerFound) throw {code: 404, message: "Cliente não encontrado"};

    return await customerFound.destroy();
}
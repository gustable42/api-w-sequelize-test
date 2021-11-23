const appointmentData = require('../data/appointment.data');

exports.create = async (customer) => {
    return await appointmentData.create(customer);
}

exports.findAll = async () => {
    return await appointmentData.findAll();
}

exports.find = async (id) => {
    return await appointmentData.find(id);
}

exports.update = async (id, customer) => {
    return await appointmentData.update(id, customer);
}

exports.delete = async (id) => {
    return await appointmentData.delete(id);
}


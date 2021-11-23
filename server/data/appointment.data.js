const {Appointment, Customer} = require('../models/index');

exports.create = async (appointment) => {
    const customer = await Customer.findByPk(appointment.customerId);
    if(!customer) throw {code: 404, message: 'Cliente não encontrado'};
    return await Appointment.create(appointment, {include: [{model: Customer, foreignKey: 'customerId', as: 'customer'}]});
}

exports.findAll = async () => {
    return await Appointment.findAll({include: [{model: Customer, foreignKey: 'customerId', as: 'customer'}]});
}

exports.find = async (id) => {
    const appointmentFound = await Appointment.findByPk(id);
    if (!appointmentFound) throw {code: 404, message: "Consulta não encontrada"};

    return await Appointment.findByPk(id);
}

exports.findByCustomerId = async (id) => {
    return await Appointment.findAll({include: [
        {model: Customer, as: 'Customer', where: {id}}
    ]});
}

exports.update = async (id, appointment) => {
    const appointmentFound = await Appointment.findByPk(id);

    if (!appointmentFound) throw {code: 404, message: "Consulta não encontrada"};

    appointmentFound.datetime = appointment.datetime ? appointment.datetime : appointmentFound.datetime;
    appointmentFound.price = appointment.price ? appointment.price : appointmentFound.price;

    return await appointmentFound.save();
}

exports.delete = async (id) => {
    const appointmentFound = await Appointment.findByPk(id);
    if (!appointmentFound) throw {code: 404, message: "Consulta não encontrada"};

    return await appointmentFound.destroy();
}
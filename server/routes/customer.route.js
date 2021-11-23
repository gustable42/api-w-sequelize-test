const express = require('express');
const router = express.Router();
const customerService = require('../services/customer.service');

router.get('/', async (req, res) => {
    customerService.findAll().then((customers) => {
        res.status(200).json(customers);
    }).catch(err => {
        res.status(err.code).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.get('/:id', async (req, res) => {
    customerService.find(req.params.id).then((customer) => {
        res.status(200).json(customer);
    }).catch(err => {
        res.status(err.code).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.post('/', async (req, res) => {
    customerService.create(req.body).then((customer) => {
        res.status(201).json(customer);
    }).catch(err => {
        res.status(err.code).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.patch('/:id', async (req, res) => {
    customerService.update(req.params.id, req.body).then((customer) => {
        res.status(200).json(customer);
    }).catch(err => {
        res.status(err.code).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.delete('/:id', async (req, res) => {
    customerService.delete(req.params.id).then((customer) => {
        res.status(204).send(customer);
    }).catch(err => {
        console.log(err);
        res.status(err.code).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});


module.exports = router;
const express = require('express');
const router = express.Router();
const appointmentService = require('../services/appointment.service');

router.get('/', async (req, res) => {
    appointmentService.findAll().then((appointments) => {
        res.status(200).json(appointments);
    }).catch(err => {
        res.status(err.code || 500).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.get('/:id', async (req, res) => {
    appointmentService.find(req.params.id).then((appointment) => {
        res.status(200).json(appointment);
    }).catch(err => {
        res.status(err.code || 500).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.post('/', async (req, res) => {
    appointmentService.create(req.body).then((appointment) => {
        res.status(201).json(appointment);
    }).catch(err => {
        res.status(err.code || 500).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.patch('/:id', async (req, res) => {
    appointmentService.update(req.params.id, req.body).then((appointment) => {
        res.status(200).json(appointment);
    }).catch(err => {
        res.status(err.code || 500).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});

router.delete('/:id', async (req, res) => {
    appointmentService.delete(req.params.id).then((appointment) => {
        res.status(204).send(appointment);
    }).catch(err => {
        res.status(err.code || 500).send({
            message: err.message || "Um erro inesperado ocorreu. Contacte o suporte."
        });
    });
});


module.exports = router;
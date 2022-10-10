const express = require('express');
const router = express.Router();
const {getRegistrarData, getRegistrarDataById, createRegistrarData, updateRegistrarData, deleteRegistrarData} = require('../controller/registrar-controller.js');

router.get('/', getRegistrarData);

router.get('/:id', getRegistrarDataById);

router.post('/', createRegistrarData);

router.put('/:id', updateRegistrarData);

router.delete('/:id', deleteRegistrarData);

module.exports = router;
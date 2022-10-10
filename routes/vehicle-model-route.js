const express = require('express');
const router = express.Router()
const {getData, getDataById, createData, updateData, deleteData} = require('../controller/vehicle-model-controller.js');

router.get('/', getData);

router.get('/:id', getDataById);

router.post('/', createData);

router.put('/:id', updateData);

router.delete('/:id', deleteData);

module.exports =  router;
const express = require('express');
const router = express.Router();
const {getVehicleData, getVehicleDataById, createVehicleData, updateVehicleData, deleteVehicleData} = require('../controller/vehicle-name-controller.js');

router.get('/', getVehicleData);

router.get('/:id', getVehicleDataById);

router.post('/', createVehicleData);

router.put('/:id', updateVehicleData);

router.delete('/:id', deleteVehicleData);

module.exports =  router;
const express = require('express');
const router = express.Router();
const {getBrandData, getBrandDataById, createBrandData, updateBrandData, deleteBrandData} = require('../controller/vehicle_brand_controller.js');

router.get('/', getBrandData);

router.get('/:id', getBrandDataById);

router.post('/', createBrandData);

router.put('/:id', updateBrandData);

router.delete('/:id', deleteBrandData);

module.exports = router;
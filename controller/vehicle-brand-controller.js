const { connection, sql } = require('../config/db.config.js');

const getBrandData = (req, res) => {
    const sql = `select brandId, brandName, vehicleId from vehicle_db.brand_info`;
    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        res.send({
            message: result.length > 0 ? "all data" : "data not found",
            data: result
        })
    });
}

const getBrandDataById = (req, res) => {
    const userId = Number(req.params.id);
    const sql = `select brandId, brandName, vehicleId from vehicle_db.brand_info where brandId='${userId}'`;
    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        res.send({
            message: result.length > 0 ? "single data" : "data not found",
            data: result
        })
    })
}
const createBrandData = (req, res) => {
    const {brandName} =req.body;
    res.send({ message: "create data" })
}

const updateBrandData = (req, res) => {
    res.send({ message: "update data" });
}

const deleteBrandData = (req, res) => {
    res.send({ message: "Delete Data" });
}
module.exports = { getBrandData, getBrandDataById, createBrandData, updateBrandData, deleteBrandData };
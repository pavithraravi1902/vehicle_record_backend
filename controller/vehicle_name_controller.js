const { connection, sql } = require('../config/db.config.js');

const getVehicleData = (req, res) => {
    const sql = `select vehicle_id, vehicle_name from vehicle_db.vehicle_info`;
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

const getVehicleDataById = (req, res) => {
    const user_id = Number(req.params.id);
    const sql = `select vehicle_id, vehicle_name from vehicle_db.vehicle_info where vehicle_id=${user_id}`;
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
const createVehicleData = (req, res) => {
    res.send({ message: "create data" })
}

const updateVehicleData = (req, res) => {
    res.send({ message: "update data" });
}

const deleteVehicleData = (req, res) => {
    res.send({ message: "Delete Data" });
}
module.exports = { getVehicleData, getVehicleDataById, createVehicleData, updateVehicleData, deleteVehicleData };
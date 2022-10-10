const { connection, sql } = require('../config/db.config.js');

const getData = (req, res) => {
    const sql = `select modelId, modelName, year, cost, description, brandId from vehicle_db.model_specification`;
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

const getDataById = (req, res) => {
    const userId = Number(req.params.id);
    const sql = `select modelId, modelName, year, cost, description from vehicle_db.model_specification where modelId=${userId}`;
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
const createData = (req, res) => {
    const { modelName, year, cost, description } = req.body;
    const sql = `insert into vehicle_db.model_specification(modelName, year, cost, description) values ('${modelName}', ${year}, ${cost}, '${description}')`;
    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        res.send({
            message: result.length > 0 ? "data created" : "payload not found",
            data: result
        })
    })
}

const updateData = (req, res) => {
    res.send({ message: "update data" });
}

const deleteData = (req, res) => {
    res.send({ message: "Delete Data" });
}
module.exports = { getData, getDataById, createData, updateData, deleteData };
const { connection, sql } = require('../config/db.config.js');

const getData = (req, res) => {
    const sql = `select model_id, model_name, year, cost, description, brand_id from vehicle_db.model_specification`;
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
    const user_id = Number(req.params.id);
    const sql = `select model_id, model_name, year, cost, description from vehicle_db.model_specification where model_id=${user_id}`;
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
    const { model_name, year, cost, description } = req.body;
    const sql = `insert into vehicle_db.model_specification(model_name, year, cost, description) values ('${model_name}', ${year}, ${cost}, '${description}')`;
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
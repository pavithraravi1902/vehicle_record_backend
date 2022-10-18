const { connection, sql } = require('../config/db.config.js');
const { validationSchema } = require('../validation/registrar-validation.js')

const getRegistrarData = (req, res) => {
    const sql = `select recordId, registrarName, mobileNumber, vehicleName, brandName, modelName, year, cost, description from vehicle_db.registered_record`;
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

const getRegistrarDataById = (req, res) => {
    const userId = Number(req.params.id);
    const sql = `select recordId, registrarName, mobileNumber, vehicleName, brandName, modelName, year, cost, description from vehicle_db.registered_record where recordId=${userId}`;
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

const createRegistrarData = (req, res) => {
    const { registrarName, mobileNumber, vehicleName, brandName, modelName, year, cost, description } = req.body;
    const sql = `insert into vehicle_db.registered_record (registrarName, mobileNumber, vehicleName, brandName, modelName, year, cost, description) values ('${registrarName}', '${mobileNumber}', '${vehicleName}', '${brandName}', '${modelName}', ${year}, ${cost}, '${description}')`
    if (validationSchema.validate(req.body).error) {
        res.send(validationSchema.validate(req.body).error.details);
    } else {
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
            res.send({
                message: result.length > 0 ? "Error" : "data inserted",
                data: result
            });
        });
    }
}

const updateRegistrarData = (req, res) => {

    const userId = Number(req.params.id);
    const { recordId, registrarName, mobileNumber, vehicleName, brandName, modelName, year, cost, description } = req.body;
    const sql = `update vehicle_db.registered_record set recordId = ${recordId}, registrarName = '${registrarName}', mobileNumber = '${mobileNumber}', vehicleName = '${vehicleName}', brandName = '${brandName}', modelName = '${modelName}', year = '${year}', cost = '${cost}', description = '${description}'  where recordId= ${userId}`;
        connection.query(sql, (err, result) => {
            if (err) { console.log(err); }
            res.send({
                message: result.length > 0 ? "Error" : "data updated",
                data: result
            });
        });
}

const deleteRegistrarData = (req, res) => {
    const userId = Number(req.params.id);
    const sql = `delete from vehicle_db.registered_record where recordId = ${userId}`;
    /*****  if (validateDelete.validate(req.body).error) {
        res.send(validateDelete.validate(req.body).error.details);
    } else {} ****/
        connection.query(sql, (err, result) => {
            if (err) { console.log(err); }
            res.send({
                message: "data deleted",
                data: result
            });
        });
}
module.exports = { getRegistrarData, getRegistrarDataById, createRegistrarData, updateRegistrarData, deleteRegistrarData };
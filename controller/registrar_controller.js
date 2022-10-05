const { connection, sql } = require('../config/db.config.js');
const { validationSchema, validateDelete } = require('../validation/registrar_validation.js')

const getRegistrarData = (req, res) => {
    const sql = `select record_id, registrar_name, mobile_number, vehicle_name, brand_name, model_name, year, cost, description from vehicle_db.registered_record`;
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
    const user_id = Number(req.params.id);
    const sql = `select record_id, registrar_name, mobile_number, vehicle_name, brand_name, model_name, year, cost, description from vehicle_db.registered_record where record_id=${user_id}`;
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
    const { registrar_name, mobile_number, vehicle_name, brand_name, model_name, year, cost, description } = req.body;
    const sql = `insert into vehicle_db.registered_record (registrar_name, mobile_number, vehicle_name, brand_name, model_name, year, cost, description) values ('${registrar_name}', '${mobile_number}', '${vehicle_name}', '${brand_name}', '${model_name}', ${year}, ${cost}, '${description}')`
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

    const user_id = Number(req.params.id);
    const { registrar_name, mobile_number, vehicle_name, brand_name, model_name, year, cost, description } = req.body;
    const sql = `update vehicle_db.registered_record set registrar_name = '${registrar_name}', mobile_number = '${mobile_number}', vehicle_name = '${vehicle_name}', brand_name = '${brand_name}', model_name = '${model_name}', year = '${year}', cost = '${cost}', description = '${description}'  where record_id= ${user_id}`;
    if (validationSchema.validate(req.body).error) {
        res.send(validationSchema.validate(req.body).error.details);
    } else {
        connection.query(sql, (err, result) => {
            if (err) { console.log(err); }
            res.send({
                message: result.length > 0 ? "Error" : "data updated",
                data: result
            });
        });
    }
}

const deleteRegistrarData = (req, res) => {
    const user_id = Number(req.params.id);
    const sql = `delete from vehicle_db.registered_record where record_id = ${user_id}`;
    /*****  if (validateDelete.validate(req.body).error) {
        res.send(validateDelete.validate(req.body).error.details);
    } else {} ****/
        connection.query(sql, (err, result) => {
            if (err) { console.log(err); }
            res.send({
                message: "data deleted"
            });
        });
}
module.exports = { getRegistrarData, getRegistrarDataById, createRegistrarData, updateRegistrarData, deleteRegistrarData };
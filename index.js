const express = require('express');
const app = express();
const modelRoute = require('./routes/vehicle-model-route.js');
const brandRoute = require('./routes/vehicle-brand-route.js');
const vehicleRoute = require('./routes/vehicle-name-route.js');
const registrarRoute = require('./routes/registrar-route.js')
const cors = require('cors')
const port = 8000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());
app.use('/model', modelRoute);
app.use('/brand', brandRoute);
app.use('/vehicle', vehicleRoute);
app.use('/record', registrarRoute);
app.listen(port, () => { console.log("Server running in 8000") });


const express = require('express');
const app = express();
const model_route = require('./routes/vehicle_model_routes.js');
const brand_route = require('./routes/vehicle_brand_routes.js');
const vehicle_name_route = require('./routes/vehicle_name_router.js')
const cors = require('cors')
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());
app.use('/model', model_route);
app.use('/brand', brand_route);
app.use('/vehicle-name', vehicle_name_route);
app.listen(8000, () => { console.log("Server running in 8000") });


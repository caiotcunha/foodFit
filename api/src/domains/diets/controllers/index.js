const app = require("../../../../config/expressConfig");
const User = require("../models/User");
const sequelize = require('../../../../database/index');


route.get('/', async(req, res,next) => {
    sequelize.sync
})
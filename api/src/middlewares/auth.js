const User = require("../domains/users/models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function loginMiddleware(req, res, next) {
    try {
        const user = User.findOne({
            where: req.body.email
        })
    } catch (error) {

    }
}
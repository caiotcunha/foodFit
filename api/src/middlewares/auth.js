const User = require("../domains/users/models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const PermissionError = require("../../errors/PermissinError");
const statusCodes = require("../../utils/constants/statusCodes");

function signJwt(user, res) {
    const body = {
        id: user.id,
        name: user.name
    }

    const token = jwt.sign({ user: body }, process.env.SECRET_KEY, 
        {expiresIn: process.env.JWT_EXPIRATION});

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== ('development')
    });
}

function cookieExtractor(req) {
    let token = null;

    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }

    return token;
}

async function loginMiddleware(req, res, next) {
    try {
        const user = await User.findOne({where: {email: req.body.email}});

        if (!user) {
            throw new PermissionError('Email ou senha incorretos!');
        } else {
            const matchingPassword = await bcrypt.compare(req.body.password, user.password);
            if (!matchingPassword) {
                throw new PermissionError('Email ou senha incorretos!');
            } 
        }

        signJwt(user, res);

        res.status(statusCodes.NO_CONTENT).end();
    } catch (error) {
        next (error);
    }
}

function verifyJwt(req, res, next) {
    try {
        const token = cookieExtractor(req);

        if (token) {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded.user;
        }

        if (!req.user) {
            throw new PermissionError('Você precisa estar logado para fazer esta ação!');
        }

        next();
    } catch (error) {
        next (error);
    }
}

function notLoggedIn (req, res, next) {
    try {
        const token = cookieExtractor(req);

        if (token) {
            jwt.verify(
                token,
                process.env.SECRET_KEY,
                (err) => {
                    if (!(err instanceof jwt.TokenExpiredError)) {
                        throw new PermissionError('Você já está logado no sistema!');
                    }
                },
            );

            next();
        }
    } catch (error) {
        next (error);
    }
}

module.exports = {
    loginMiddleware,
    notLoggedIn,
    verifyJwt,
};
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require('bcrypt');
const generalConstants = require("../../../../utils/constants/generalConstants");
const statusCodes = require("../../../../utils/constants/statusCodes");

const { loginMiddleware,
    notLoggedIn,
    verifyJwt} = require('../../../middlewares/auth');


router.post('/login', notLoggedIn, loginMiddleware);

router.post('/logout', 
    verifyJwt,
    async (req, res, next) => {
        try {
            res.clearCookie('jwt');
            res.status(statusCodes.NO_CONTENT).end();
        } catch (error) {
            next (error);
        }
    })


router.post('/', async (req, res, next) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            weight: req.body.weight,
            height: req.body.height,
            age: req.body.age
        }

        user.password = await bcrypt.hash(req.body.password, generalConstants.SALT_ROUNDS);

        await User.create(user);
        res.status(201).send('Usuário criado');
    } catch (error) {
        next(error);
    }
})

router.get('/', async (req, res, next) => {
    try {
        const users =  await User.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        res.status(200).send(users);
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const user =  await User.findByPk(req.params.id, {
            attributes: {
                exclude: ['createdAt', 'updated_at']
            }
        });
        
        if(!user){
            throw new error;
        }
        
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const user =  await User.findByPk(req.params.id);
        await user.update(req.body);
        
        res.status(200).send("Usuário alterado com sucesso!");
    } catch (error) {
        next(error);
    }
})

module.exports = router;
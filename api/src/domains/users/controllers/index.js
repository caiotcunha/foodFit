const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require('bcrypt');
const randtoken = require('rand-token');
const generalConstants = require("../../../../utils/constants/generalConstants");
const statusCodes = require("../../../../utils/constants/statusCodes");
const sendEmail = require("../../../../utils/functions/sendEmail");
const message = require('../../../../utils/constants/message');

const { loginMiddleware,
    notLoggedIn,
    verifyJwt} = require('../../../middlewares/auth');

const QueryError = require("../../../../errors/QueryError");
const InternalServerError = require("../../../../errors/InternalServerError")

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


router.post('/', 
    async (req, res, next) => {
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

router.get('/', 
    async (req, res, next) => {
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

router.get('/myProfile', 
    verifyJwt,
    async (req, res, next) => {
        try {
            const user =  await User.findByPk(req.user.id, {
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

router.put('/:id', 
    verifyJwt,
    async (req, res, next) => {
        try {
            const user =  await User.findByPk(req.params.id);

            if (!user) {
                throw new QueryError('Usuário não encontrado!');
            }

            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, generalConstants.SALT_ROUNDS);
            }

            await user.update(req.body);
            
            res.status(200).send("Usuário alterado com sucesso!");
        } catch (error) {
            next(error);
        }
})

router.post('/forgotPassword',
    async(req, res, next) => {
        try {
            let email = req.body.email;

            const user = await User.findOne ({
                where: {
                    email: email
                }
            });
            
            if (!user) {
                throw new QueryError('Confira o email fornecido.');
            }

            var token = randtoken.generate(6);
            var sent = await sendEmail(email, token, message.PASSWORD_SUBJECT, message.HTML_PASSWORD);

            if (sent === true) {
                user.passwordToken = token;
                await user.save();
            } else {
                throw new InternalServerError('Erro interno do servidor no envio do email com o token.');
            }

            res.status(statusCodes.SUCCESS).json('Email com token enviado com sucesso');
        } catch (error) {
            next (error);
        }
    });

router.post('/validateToken',
    async(req, res, next) => {
        try {
            const user = await User.findOne({
                where: {
                    passwordToken: req.body.token
                }
            });
    
            if (!user) {
                throw new QueryError('Confira se o token usado é semelhante ao que foi enviado ao seu email.');
            }
    
            res.status(statusCodes.SUCCESS).json(user.id);
        } catch (error) {
            next(error);
        }
    });

router.post('/resetPassword/:id',
    async(req, res, next) => {
        try {
            const user = await User.findByPk(req.params.id);

            if (!user) {
                throw new QueryError('Usuário não encontrado!');
            }

            if(user.passwordToken == null){
                throw new PermissionError('Você não possui permissão para realizar essa ação');
            }

            newPassword = await bcrypt.hash(req.body.password, generalConstants.SALT_ROUNDS);

            user.passwordToken = null;
            user.password = newPassword;
            await user.save();

            res.status(statusCodes.SUCCESS).json('Senha alterada com sucesso');
        } catch (error) {
            next(error);
        }
    })

module.exports = router;
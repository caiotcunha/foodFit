const router = require("express").Router();
const UserService = require("../services/UserService");
const { loginMiddleware,
    notLoggedIn,
    verifyJwt} = require('../../../middlewares/auth');

const statusCodes = require("../../../../utils/constants/statusCodes");

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
            await UserService.create(req.body);
            res.status(statusCodes.CREATED).send('Usuário criado');
        } catch (error) {
            next(error);
        }
    })

router.get('/', 
    async (req, res, next) => {
        try {
            const users = await UserService.getAll();
            res.status(statusCodes.SUCCESS).send(users);
        } catch (error) {
            next(error);
    }
})

router.get('/myProfile', 
    verifyJwt,
    async (req, res, next) => {
        try {
            const user = await UserService.myProfile(req.user.id);            
            res.status(statusCodes.SUCCESS).send(user);
        } catch (error) {
            next(error);
        }
})

router.put('/:id', 
    verifyJwt,
    async (req, res, next) => {
        try {
            await UserService.update(req.user.id)
            res.status(statusCodes.SUCCESS).send("Usuário alterado com sucesso!");
        } catch (error) {
            next(error);
        }
})

router.post('/forgotPassword',
    async(req, res, next) => {
        try {
            await UserService.forgotPassword(req.body.email);
            res.status(statusCodes.SUCCESS).json('Email com token enviado com sucesso');
        } catch (error) {
            next (error);
        }
    });

router.post('/validateToken',
    async(req, res, next) => {
        try {
            await UserService.validateToken(req.body.token);
            res.status(statusCodes.SUCCESS).json(user.id);
        } catch (error) {
            next(error);
        }
    });

router.post('/resetPassword/:id',
    async(req, res, next) => {
        try {
            await UserService.resetPassword(req.params.id);
            res.status(statusCodes.SUCCESS).json('Senha alterada com sucesso');
        } catch (error) {
            next(error);
        }
    })

module.exports = router;
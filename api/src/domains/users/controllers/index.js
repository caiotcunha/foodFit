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
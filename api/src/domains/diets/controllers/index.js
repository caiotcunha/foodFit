const statusCodes = require("../../../../utils/constants/statusCodes");
const { verifyJwt } = require("../../../middlewares/auth");
const DietService = require("../services/DietService");
const router = require("express").Router();

router.post('/', 
    verifyJwt,
    async (req, res, next) => {
    try {
        await DietService.create(req.body, req.user.id);
        res.status(201).json('Dieta criada com sucesso');
    } catch (error) {
        next(error);
    }
})

router.post('/sendEmail/:dietId', 
    verifyJwt,
    async(req, res, next) => {
        try {
            await DietService.sendEmail(req.params.dietId, req.user.id);
            res.status(statusCodes.SUCCESS).json('Dieta enviada para o email com sucesso');
        } catch (error) {
            next(error);
        }
    })

router.get('/userDiets/', 
    verifyJwt,
    async (req, res, next) => {
    try {
        const diets = await DietService.getAllUserDiets(req.user.id);
        res.status(200).send(diets);
    } catch (error) {
        next(error);
    }
})

router.get('/:dietId', 
    verifyJwt,
    async (req, res, next) => {
    try {
        const diet = await DietService.getUserDiet(req.params.dietId, req.user.id);        
        res.status(200).send(diet);
    } catch (error) {
        next(error);
    }
})

module.exports = router;
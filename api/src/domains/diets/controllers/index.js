const Diet = require("../models/Diet");
const router = require("express").Router();

router.post('/', async (req, res, next) => {
    try {
        await Diet.create(req.body);

        res.status(201).send("Dieta criada com sucesso!");
    } catch (error) {
        next(error);
    }
})

router.get('/userDiets/:UserId', async (req, res, next) => {
    try {
        const diets = await Diet.findAll({
            where: {
                UserId: req.params.UserId
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        res.status(200).send(diets);
    } catch (error) {
        next(error);
    }
})

router.get('/:dietId', async (req, res, next) => {
    try {
        const diet =  await Diet.findByPk(req.params.dietId, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        
        res.status(200).send(diet);
    } catch (error) {
        next(error);
    }
})

module.exports = router;
const Diet = require("../models/Diet");
const router = require("express").Router();
const generateDiet = require('../../../../utils/functions/generateDiet');

router.post('/', async (req, res, next) => {
    try {
        const diet = {
            diet: req.body.diet,
            weight: req.body.weight,
            goal: req.body.goal,
            calories: req.body.calories,
            restrictions: req.body.restrictions,
            UserId: req.body.UserId
        }

        diet.diet = await generateDiet(diet.weight, diet.goal, diet.calories, diet.restrictions);
        await Diet.create(req.body);

        res.status(201).json(diet.diet);
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
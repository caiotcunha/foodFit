const { where } = require("sequelize")
const Diet = require("../models/Diet")
const router = require("express").Router()


// Create
router.post('/', async (req, res, next) => {
    try {
        await Diet.create(req.body)

        res.status(201).send("Dieta criada com sucesso!")
    } catch (error) {
        next(error)
    }
})

// Get All Diets (do user)
router.get('/:UserId', async (req, res, next) => {
    try {
        const diets = await Diet.findAll({
            where: {
                UserId: req.params.UserId
            },
            attributes: {
                exclude: ['created_at', 'updated_at']
            }
            
        })

        res.status(200).send(diets)
    } catch (error) {
        next(error)
    }
})


// Get by ID
router.get('/:UserId/:id', async (req, res, next) => {
    try {
        const diet =  await Diet.findOne({
            where: {
                UserId: req.params.UserId,
                id: req.params.id
            },
            attributes: {
                exclude: ['created_at', 'updated_at']
            }
        })
        if(!diet){
            throw new error
        }
        
        res.status(200).send(diet)
    } catch (error) {
        next(error)
    }
})



module.exports = router
const User = require("../models/User")
const router = require("express").Router()

// Create
router.post('/', async (req, res, next) => {
    try {
        await User.create(req.body)

        res.status(201).send('Usuário criado')
    } catch (error) {
        next(error)
    }
})

// Find All
router.get('/', async (req, res, next) => {
    try {
        const users =  await User.findAll({
            attributes: {
                exclude: ['created_at', 'updated_at']
            }
        })

        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
})

// Find by ID
router.get('/:id', async (req, res, next) => {
    try {
        const user =  await User.findByPk({
            attributes: {
                exclude: ['created_at', 'updated_at']
            }
        })
        if(!user){
            throw new error
        }
        
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
})

// Update
router.put('/:id', async (req, res, next) => {
    try {
        const user =  await User.findByPk(req.params.id)
        await user.update(req.body)
        
        res.status(200).send("Usuário alterado com sucesso!")
    } catch (error) {
        next(error)
    }
})

module.exports = router
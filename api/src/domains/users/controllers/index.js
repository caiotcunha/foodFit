const User = require("../models/User");
const router = require("express").Router()

router.post('/', async (req, res, next) => {
    try {
        await User.create(req.body);
        res.status(201).send('Usuário criado');
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const users =  await User.findAll();
        res.status(200).send(users);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const user =  await User.findByPk(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        next(error)
    }
})


module.exports = router
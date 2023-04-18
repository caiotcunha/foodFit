const User = require("../models/User");
const router = require("express").Router()

router.get('/', (req, res, next) => {
    res.send("Página principal das dietas")
})


module.exports = router
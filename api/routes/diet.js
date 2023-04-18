const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Página principal das dietas")
})

router.get('/posts', (req, res) => {
    res.send("Página de posts das dietas")
})

module.exports = router
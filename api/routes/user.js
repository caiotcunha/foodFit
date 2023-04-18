const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Página principal do usuário")
})

router.get('/posts', (req, res) => {
    res.send("Página de posts")
})

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/tasks', (req, res) => {
    res.send('API task')
})

module.exports = router;
var express = require('express')
var router = express.Router()

router.get('/', (req,res) =>
{
    res.send("<h1>Ho Chi Minh City</h1>")
})

router.get('/quan1', (req,res) =>
    {
        res.send("<h1>Quan 1 - HCM City</h1>")
    })

module.exports = router
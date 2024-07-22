var express = require('express')
var router = express.Router()

router.get('/', (req,res) =>
{
    res.render('hanoi/hanoi')
})

router.get('/caugiay', (req,res) =>
{
    res.render('hanoi/caugiay')
})

router.get('/thanhxuan', (req, res) =>
{
    res.render('hanoi/thanhxuan')
})

module.exports = router
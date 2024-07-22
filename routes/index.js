var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', (req, res) =>
{
  res.render('demo')
})

router.get('/Hn', (req, res) =>
  {
    res.render('Hanoi')
  })

router.get('/sports', (req, res) =>
{
    let football = "Football"
    let swimming = "Swimming"
    res.render('sports', {football, swimming, tennis :"Tennis"})
})
router.get('/test', (req, res) =>
  {
    let year = 2024
    let phones = ['Iphone', 'Samsung', 'Oppo', 'Huawei','Xiaomi']
    res.render('test', 
      {
        year,
        city: "Ha noi",
        mobiles : phones
      })
  })
  router.get('/greenwich', (req, res) =>
    {
      let university = ['Ha Noi','Da Nang','Can Tho','HCM']
      res.render('greenwich', {university})
    })
module.exports = router;

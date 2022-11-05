var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var products=
 [
  {
    name:"REALMI X2",
    category:"Mobile",
    discription:"It Is Good Looking Phone",
    image:"https://www.notebookcheck.net/uploads/tx_nbc2/OppoRealmeX2__1_.JPG"

  },
  {
    name:"ONE PLUS 7T",
    category:"Mobile",
    discription:"It Is Good Looking Phone",
    image:"https://www.91-img.com/pictures/135476-v10-oneplus-7t-pro-mobile-phone-large-1.jpg?tr=h-241,c-at_max,q-80"

  },
  {
    name:"OPPO 10X",
    category:"Mobile",
    discription:"It Is Good Looking Phone",
    image:"https://khaleejitech.com/wp-content/uploads/2020/06/Oppo-Reno-10x-zoom.jpg"

  },
  {
    name:"MI NOTE 9 PRO.",
    category:"Mobile",
    discription:"It Is Good Looking Phone",
    image:"https://i02.appmifile.com/353_operator_in/30/01/2021/875bfa2f1b429d824feea13747f0a5f8!800x800!85.png"

  }
  
 ]

  res.render('index',{products})

  console.log(products)
});

module.exports = router;

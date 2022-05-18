var express = require('express');
var router = express.Router();
const database = require('../config/users')


// / = /
/* GET home page. */

  router.get('/', function (req, res, next) { 
    const data = [
      {
        name: 'iPhone',
        price: '100$',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418'
      },
      {
        name: 'laptop',
        price: '200$',
        img: 'https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg'
      },
      {
        name: 'laptop',
        price: '200$',
        img: 'https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg'
      }, {
        name: 'laptop',
        price: '200$',
        img: 'https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg'
      }

    ]
    let state = database.state
    switch (state) {
      case false:
        res.redirect('/login')
        break
      case true:
        res.render('index', { data })
        break
    }

  })
    
    




module.exports = router;

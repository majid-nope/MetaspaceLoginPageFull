let express = require('express')
let router = express.Router()
// const database = require('../config/session')
const database = require('../config/users')



// /login = /
router.get('/', (req, res) => {
    // database.setItem('login', false)

    res.render('login')

    database.state = false
    

})



router.post('/', (req, res) => {
    let {email, password} = req.body
    console.log(email, password)
    if (password == database.password) { 
        
        database.state = true
        res.redirect('/')

    } else {
        database.state = false
        res.redirect('/login')
    }
})
module.exports = router

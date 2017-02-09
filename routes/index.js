const express = require('express')
const router = express.Router()

router.get('/home', function(req, res, next) {
  res.render('/', {
    'title': "Home Page"
  })
})

module.exports = router

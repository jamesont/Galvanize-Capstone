const express = require('express')
const router = express.Router()


//this router is mounted at localhost 8000/artistInfo
router.get('/artistInfo', function(req, res, next) {
  res.render('index', {
    'title': "ArtistInfo"
  })
})

module.exports = router

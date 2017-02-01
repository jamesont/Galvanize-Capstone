const express        = require('express')
const router         = express.Router()
const bodyParser     = require('body-parser')
const app            = express()
const PORT           = process.env.PORT || 3000

app.set('view engine', 'html')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(PORT, function() {
  console.log(`${PORT} be listening... bitchezzzzz`)
})

router.route('/')
  .get(function(req, res) {
    res.render("./public/index")
  });

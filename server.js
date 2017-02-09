const express = require('express')
const path = require('path')

const favicon = require('serve-favicon')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8000
const knex = require('./db/knex.js');

const routes = require('./routes/index')
const users = require('./routes/users')
const artistInfo = require('./routes/artistInfo')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

   // intercept OPTIONS method
   if ('OPTIONS' === req.method) {
     res.sendStatus(200);
   }
   else {
     next();
   }
});

app.use('/', routes)
app.use('/users', users)
app.use('/artistInfo', artistInfo)

// ===================add data to db======================
app.post('/createNewUser', function(req, res) {
  knex('users').returning("*").insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    hashed_password: req.body.hashed_password
  }).then(function(data) {
    res.json(data)
  }).catch(function(err) {
    console.log(err);
  })
})
// ====================end db post============================

// ======================start db get request ===================
// app.get('/LoginForm', function(req, res) {
//   knex('users').where({
//       email: req.body.email,
//       hashed_password: req.body.hashed_password
//     }).then(function(req){
//       console.log('data', req);
//     }).catch(function(error){
//       console.log('error', error);
//       res.render('/public/error')
//     })
//   })
// ======================end db get request ===================

// ======================start db get request ===================
app.get('/LoginForm', function(req, res) {
  knex('users').where({
      email: req.body.email,
      hashed_password: req.body.hashed_password
    }).then(function(req){
      console.log('data', req);
    }).catch(function(error){
      console.log('error', error);
      res.render('/public/error')
    })
  })
// ======================end db get request ===================

app.listen(PORT, function() {
  console.log(`Port is listening on port ${PORT}`);
})

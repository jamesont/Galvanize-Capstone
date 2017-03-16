const express = require('express')
const path = require('path')

const favicon = require('serve-favicon')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8000
const knex = require('./db/knex.js')
const html = require('html')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    if ('OPTIONS' === req.method) res.sendStatus(200)
    else next()
})

//===================add data to db==========================
app.post('/createNewUser', (req, res) => {
    knex('users').returning("*").insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: req.body.hashed_password
    }).then((data) => {
        res.json(data)
    }).catch((err) => {
        next(new Error(err))
    })
})
//====================end db post=============================


//======================start db validation===================
app.post('/LoginForm', (req, res) => {
    knex('users').where({
        email: req.body.email,
        hashed_password: req.body.hashed_password
    }).then((data) => {
    if (data.length === 0)
        console.log('User name not found');
    }).catch((err) => {
        next(new Error(err))
    })
})
//======================end db validation=====================

app.listen(PORT, () => {
    console.log(`Port is listening on port ${PORT}`)
})

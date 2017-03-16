const express = require('express')
const router = express.Router()
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
    knex('users')
        .select('*')
        .then(users => {
        res.render('../views/users', { 'users': users })
    })
})

module.exports = router

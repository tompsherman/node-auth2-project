const router = require('express').Router()

const Users = require('./userModels')

const restricted = require('../auth/restrictedMiddleware')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})

// @desc		Get all users
// @route		GET /
router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
})

module.exports = router
const bcrypt = require('bcryptjs')
const router = require('express').Router()

const Users = require('../users/userModels')

const {isValid} = require('../users/userService')
const {jwtSecret} = require('./secret')

const jwt = require('jsonwebtoken')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the auth router is running at ' + currentTime})
})

// register new User ; POST /
router.post('/register', async (req,res)=>{ 
    const credentials = req.body

    if(isValid(credentials)){
        const rounds = process.env.BCRYPT_ROUNDS || 8

        const hash = bcrypt.hashSync(credentials.password, rounds)

        credentials.password = hash

        Users.create(credentials)
        .then(user => {
            res.status(201).json({data: user})
        })
        .catch(error => {
            res.status(500).json({message: error.message, error: error.stack})
        })
    } else {
        res.status(400).json({
            message: "provide username and alphanumeric password"
        })
    }
 })

 // login User ; POST / 
 router.post('/login', async (req,res)=>{ 
    const {username, password } = req.body 

    if (isValid(req.body)) {
        Users.findBy({ username: username})
        .then(([user]) => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = makeToken(user)
                res.status(200).json({ message: 'welcome to the api', token })
            } else {
                res.status(401).json({message: 'invalid credentials'})
            }
        })
        .catch(error => {
            res.status(500).json({message: error.message})
        })
    } else {
        res.status(400).json({ messge: 'please provide valid u/p'})
    }
  })

function makeToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role
    }
    const options = {
        expiresIn: '10 minutes'
    }
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router

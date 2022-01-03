const express = require("express");

const router = express.Router();
const path = require('path')
const rootdir = require('../path/path');
const signup = require('../controllers/SignupController');
const { sign } = require("crypto");


router.get('/signup', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'signup.html'))
})

router.get('/signin', signup.signin)

router.post('/signup', signup.signup);

router.post('/signin', signup.login)

module.exports = router;
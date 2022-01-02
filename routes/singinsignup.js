const express = require("express");

const router = express.Router();
const path = require('path')
const rootdir = require('../path/path');
const signup = require('../controllers/SignupController')


router.get('/signup', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'signup.html'))
})


router.post('/signup', signup.signup);

module.exports = router;
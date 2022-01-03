const sequelize = require('../util/database');
const user = require('../models/users');
const { redirect } = require('express/lib/response');

const rootdir = require('../path/path');
const path = require('path');

const bcrypt = require('bcrypt');



exports.signup = async (req, res, next) => {
    const details = req.body
    const password = details.password
    try {
        const salt = await bcrypt.genSalt();
        const hashesdpassword = await bcrypt.hash(password, salt);

        console.log(salt, hashesdpassword);

        await user.create({
            email: `${details.mail}`,
            name: `${details.name}`,
            phone: `${details.phone}`,
            password: `${hashesdpassword}`,

        })
        res.send(`<script> alert ("Succes")</script>`)
    }
    catch (error) {
        res.send(`<script> alert ("youre already user please log in")</script>`)
    }
}

exports.signin = (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'signin.html'))
}

exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    let saved_mail;
    let saved_password;

    user.findAll({
        attributes: ['email', 'password'],
        where: {
            email: `${email}`
        }
    }).then((result) => {
        saved_mail = result[0].dataValues.email;
        saved_password = result[0].dataValues.password;
        check()
    }).catch((err) => {
        res.send(`<script>alert('user not found')</script>`)
    });

    const check = async () => {
        try {

            if (await bcrypt.compare(password, saved_password)) {
                res.send(`<h1> Success </h1>`)
            }
            else {
                res.send(`<script>alert('passwords doesnt match')</script>`)
            }

        } catch (error) {
            console.log(error);
        }
    }
}


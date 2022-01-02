const sequelize = require('../util/database');
const user = require('../models/users');
const { redirect } = require('express/lib/response');

const bcrypt = require('bcrypt')

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
            password: `${hashesdpassword}`

        })
        res.send(`<h1>sucess<h2>`);
    }
    catch (error) {
        console.log(error);
        res.redirect('/')
    }
}
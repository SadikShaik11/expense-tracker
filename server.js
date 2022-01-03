
const Express = require('express');
const ex = Express();
const path = require('path')
const rootdir = require('./path/path')

const bodyparser = require('body-parser');
ex.use(bodyparser.urlencoded({ extended: false }))

const sequelize = require('./util/database');
const userdetails = require('./models/users');
const { contentType } = require('express/lib/response');

ex.use(Express.static(path.join(__dirname, 'css')));
ex.use(Express.static(path.join(__dirname, 'routes')));
ex.use(Express.static(path.join(__dirname, 'controllers')));
ex.use(Express.static(path.join(__dirname, 'script')));



const user_signup = require('./controllers/SignupController')

const sign_up = require('./routes/singinsignup')


ex.get('/', (req, res, next) => {
    res.send(`<h1>thank you!</h1>`)
})

ex.use(sign_up);

sequelize.sync().then((result) => {
    ex.listen(3000)


}).catch((err) => {
    console.log(err);
});


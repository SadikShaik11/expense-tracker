
const Express = require('express');
const ex = Express();

const path = require('path')

const rootdir = require('./path/path')

ex.use(Express.static(path.join(__dirname, 'css')));

ex.get('/', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'signup.html'))
})


ex.listen(3000)
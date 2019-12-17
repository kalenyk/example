const express = require('express');
const bodyParser = require('body-parser');
const db = require("./app/src/config/firebase").database;
const cors = require('cors');

const port = 8001;

const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    const {method,userId} = req.body;

    if(method === 'POST' && !userId) {
        res.sendStatus(403)
    };
    next()
})
require('./api/routes/index')(app,db);

app.listen(port, () => {
    console.log('We are live on ' + port);
});
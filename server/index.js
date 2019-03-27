const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.listen(port);
console.log(`Server running port ${port}...\n`);

app.post('/api/login', function(req, res) {
    const body = req.body;
    const {login, pass} = body;


    if (!login || !pass) {
        res.sendStatus(400);
        return;
    }

    if (login === 'admin' && pass === 'admin') {
        res
            .json({
                login: 'admin',
                name: 'admin'
            });
            return;
    }

    res.sendStatus(403);

  });

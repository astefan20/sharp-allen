var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 9090;
var superheroRouter = express.Router();


app.use(cors());

app.get('/', function (req, res) {
    res.send('Welcome to the Superhero API!');
});

app.listen(port, function () {
    console.log('Running on PORT: ' + port);
});

superheroRouter.route('/superheroes')
    .get(function (req, res) {
        var superheroes = JSON.parse(fs.readFileSync('data/superheroes.json'));
        res.json(superheroes);
    });

superheroRouter.route('/superpowers')
    .get(function (req, res) {
        var superpowers = JSON.parse(fs.readFileSync('data/superpowers.json'));
        res.json(superpowers);
    });


superheroRouter.route('/error')
    .get(function (req, res) {
	res.status(400).send('Unexpected error due to bad code');
    });

app.use('/api', superheroRouter);
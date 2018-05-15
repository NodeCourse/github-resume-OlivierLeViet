const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const file = fs.createWriteStream('./profil.json');


function RequestFunction() {

    request('https://api.github.com/users/:username', (err, response, body) => {
        if (err) {
            console.error(err);
        } else {

            const user = JSON.parse(body);
            file.write(":username");
            console.log(user);
        }
    });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("Appli updated:");
    res.render('index');
});

app.get('/:username', (req, res) => {
    console.log("Appli updated:");
    res.render('git');
});


app.listen(3000);
console.log("Server listening: 3000");
const request = require('request');
const express = require('express');
const app = express();

const inp = getElementById("inp").value;
const username = inp;


function RequestFunction() {

    request('https://api.github.com/users/:username', (err, response, body) => {
        if (err) {
            console.error(err);
        } else {
            // body is a string that needs to be parsed
            const user = JSON.parse(body);
            console.log(user);
        }
    });
}


app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("Appli updated:");
    res.render('index');
});

app.listen(3000);
console.log("Server listening: 3000");
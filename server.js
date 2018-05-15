const express = require('express');
const request = require('request');
const app = express();
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('/',(request, response) => {
    response.render("index");
});

app.get('/user/', (req,res) =>{
    const userName = req.query.user;
    const accesAPI = { url:'https://api.github.com/users/' + userName, headers: {'User-Agent': "StudentProject"}}
    console.log(userName);
    request(accesAPI, (err,response,body) =>{
        if (err) {
            console.error("erreur" + err);
        } else {
            // body is a string that needs to be parsed
            const user = JSON.parse(body);
            console.log(user);
            res.render("git" , {user});

        }

    });
});

console.log("Server listening: 3000");
app.listen(3000);
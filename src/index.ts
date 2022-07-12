import express, { Express, Request, Response } from 'express';
import User from './models/userModel';

const app: Express = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(User.findAll());
})

app.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        description: req.body.description
    });
    res.status(201).send();  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
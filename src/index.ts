import express, { Express, Request, Response } from 'express';
import db from './models';

const app: Express = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) =>  {
    res.send(await db.User.findAll());
})

app.get('/1', async (req, res) => {
    await db.User.create({
        firstName: 'quack',
        lastName: 'queck',
    });
    res.status(201).send();    
})

app.post('/', (req, res) => {
    // User.create({
    //     username: req.body.username,
    //     description: req.body.description
    // });
    res.status(201).send();  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
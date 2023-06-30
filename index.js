const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const user = require('./user');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world from express');
});

app.get('/api/v1/users', (req, res) => {
    const result = user.getAllUsers();
    res.send({ data: result });
});

app.get('/api/v1/users/:userId', (req, res) => {
    const id = req.params.userId;
    const result = user.getOneUser(id);

    res.send({
        data: result
    });
});

app.post('/api/v1/users', (req, res) => {
    const result = user.insertUser(req.body);
    res.send({
        data: result.data
    });
});

app.put('/api/v1/users/:id', (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    const result = user.updateUser(id, payload);
    res.send({
        data: result.data
    });
});

app.delete('/api/v1/users/:id', (req, res) => {
    const id = req.params.id;
    const result = user.deleteUser(id);
    res.send({
        data: result.data
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
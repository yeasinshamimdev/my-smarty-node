const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Now i am using nodemon! Do you can use this? ha ha ah');
});

const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01721548362' },
    { id: 2, name: 'shabnoor', email: 'shabnoor@gmail.com', phone: '01721548362' },
    { id: 3, name: 'shabila', email: 'shabila@gmail.com', phone: '01721548362' },
    { id: 4, name: 'shohana', email: 'shohana@gmail.com', phone: '01721548362' },
    { id: 5, name: 'shucorita', email: 'shucorita@gmail.com', phone: '01721548362' },
    { id: 6, name: 'sayma', email: 'sayma@gmail.com', phone: '01721548362' },
    { id: 7, name: 'salma', email: 'salma@gmail.com', phone: '01721548362' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);

    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening port', port);
})
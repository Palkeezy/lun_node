const express = require('express');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

const {userRouter, houseRouter} = require('./routes');

app.use('/user', userRouter);
app.use('/house', houseRouter);




app.all('*', (req, res) => {
    res.status(404).end();
});

app.listen(3000, (err) => {
    console.log('server is up');
});

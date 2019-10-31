const express = require('express');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {userRouter, houseRouter, authRouter, adminRouter} = require('./routes');

app.use('/user', userRouter);
app.use('/house', houseRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);




app.all('*', (req, res) => {
    res.status(404).end();
});

app.listen(3000, (err) => {
    console.log('server is up');
});

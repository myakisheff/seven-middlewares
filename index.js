const express = require('express');
const laba = require('./routes/laba');
const morgan = require('morgan');
const helmet = require('helmet');

const Comment = require('./models/comment');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/comments')
    .then((res) => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

const app = express();

app.get('/laba/comments', async (req, res) => {

    try {
        const comments = await Comment.find();
        res.render('comment', {
        name: req.comment.name,
        title: 'Главная страница',
        comment: comments
        });
    } catch (error) {
        console.log(error);
    }
    
});

app.use(morgan(':method :url :status - :response-time ms'));
app.use(helmet());

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());

app.use('/laba', laba);

//Любое подключение
app.use(function(req, res, next){
     
    console.log("New connection");
    next();
});

app.use(express.static(__dirname + "/public"));

//Неверное подключение
app.get('*', function(req, res){
    res.send('<h1>400 Bad request</h1>', 400);
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
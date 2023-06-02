const express = require('express');
const router = express.Router();

let comments = [];

const bodyParser = require('body-parser');

router.use(bodyParser.json());

function sendComment(req, res, next){
    const name = req.body;
  
    console.log(name);

  comments.push(name);
  
  res.json(comments);

  next();
}

function validateComment(req, res,next) {
    const { name } = req.body;
  
    if (!name || name.trim() === '') {
      return res.status(400).send('Comment cannot be empty');
    }
    
    req.body = name; // Записываем отредактированный комментарий в объект запроса
    next();
    
  }


module.exports = sendComment;
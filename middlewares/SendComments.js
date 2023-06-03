const express = require('express');
const Comment = require('../models/comment');

let comments = [];
let comm = {};

function sendComment(req, res, next){
    const { name, content } = req.body;

    comm.name = name;
    comm.content = content;

    comments.push(comm);

    res.json(comments);

  next();
}

function validateComment(req, res,next) {
    const { name, content } = req.body;
  
    if (!name || name.trim() === '' || !content || content.trim() === '') {
      return res.status(400).send('Comment cannot be empty');
    }

    next();
}


module.exports = {
  sendComment,
  validateComment
};

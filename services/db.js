const Comment = require('../models/comment');
const path = require('path');

 const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

async function getComments(req, res, next) {
  Comment
    .find()
    .then((comments) => {
      res.render(createPath('comments'),{ comments });
    })
    .catch((error) => {
      console.log(error);
    })
}

async function getCommentsById(req, res, next) {
  Comment.exists({ _id: req.params.id }).then(exists => {
    if (exists) {
      Comment
      .findById(req.params.id)
      .then((comment) => {
        res.render(createPath('comment'),{ comment });
      })
      .catch((error) => {
        res.send(error);
      }) 
    } else {
      res.status(404);
      res.send('<h1 style="text-align: center">404 Not Found</h1>');
    }
  })
  .catch((error) => 
  {
    res.status(404);
    res.send('<h1 style="text-align: center">404 Not Found</h1>');
    console.log(error);
  }
  )
/* 
  const result = await Comment.findOne({ _id: req.params.id }).select("_id").lean();
  if (result) {
    Comment
    .findById(req.params.id)
    .then((comment) => {
      res.render(createPath('comment'),{ comment });
    })
    .catch((error) => {
      console.log(error);
    })
  } */
}

async function addComment(req, res, next) {
    const { name, content } = req.body;

    const commentDB = new Comment({name, content});

    commentDB
    .save()
    .then((result) => console.log(result))
    .catch((error) => {
        console.log(error);
    });
}

module.exports = {
    getComments,
    addComment,
    getCommentsById
};
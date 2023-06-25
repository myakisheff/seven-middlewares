const Comment = require('../models/comment');
const path = require('path');

async function getComments(req, res, next) {

  const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

  Comment
    .find()
    .then((comments) => {
      res.render(createPath('comments'),{ comments });
    })
    .catch((error) => {
      console.log(error);
    })

  /* const comments = await db.collection('users').find().toArray();

    .then((result) => res.send(`<p><b>Name:</b> ${result.name}</p><p><b>Comment:</b> ${result.content}</p>`))
    

  try {
    const orders = await Comment.find();
    res.render('comment', {
      name: req.comment.name,
      content: req.comment.content,
      title: 'Главная страница',
      order: orders
    });
  } catch (error) {
    console.log(error);
  } */
}

async function addComment(req, res, next) {
    const { name, content } = req.body;

    console.log('Writing to database...');

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
    addComment
};
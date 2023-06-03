const Comment = require('../models/comment');



async function getComments() {
  const comments = await db.collection('users').find().toArray();

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
  }
}

async function addComment(comment) {
    const { name, content } = comment;

    const commentDB = new Comment({name, content});

    commentDB.save().catch((error) => {
        console.log(error);
    });
}

module.exports = {
    getComments,
    addComment
};
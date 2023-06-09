let comments = [];
let comm = {};

function sendComment(req, res, next){
    const { name, comment } = req.body;

    comm.name = name;
    comm.comment = comment;

    comments.push(comm);

    res.json(comments);

  next();
}

function validateComment(req, res,next) {
    const { name, comment } = req.body;
  
    if (!name || name.trim() === '' || !comment || comment.trim() === '') {
      return res.status(400).send('Comment cannot be empty');
    }

    next();
}


module.exports = {
  sendComment,
  validateComment
};

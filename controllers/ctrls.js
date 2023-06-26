const userService = require('../services/db');
const path = require('path');

const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

async function createComment(req, res, next) {
  const { name, comment } = req.body;

  if(!name || !comment)
  {
    next(new Error("bad request: name and comment required!"));
  }

  let comm = {};
  comm.name = name;
  comm.comment = comment;
  comm.createdAt = new Date();
  await userService.addComment(comm);
}

async function getAllComments(req, res, next) {
  const comments = await userService.getComments();
  res.render(createPath('comments'),{ comments });
}

async function getOneComment(req, res, next) {
  let comment;
  try{
    comment = await userService.getCommentsById(req.params.id);
  }
  catch (err){
    res.status(404);
    res.send("<h1 style='text-align: center;'>404 Not Found</h1>");
  }
  res.render(createPath('comment'),{ comment });
}

module.exports = {
  getAllComments,
  createComment,
  getOneComment
};
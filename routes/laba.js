const express = require('express');
const router = express.Router();

const getMainPage = require('../middlewares/GetMainPage');
const getStats = require('../middlewares/GetStats');
const comment = require('../middlewares/SendComments');
const auth = require('../middlewares/Authorization');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.use(auth.checkApiKey);

router.get("/", getMainPage);

router.get("/stats", getStats);

router.post("/comments", comment.validateComment, comment.sendComment);

//8
const controllers = require('../controllers/ctrls');
/* router.get('/comments/:id', controllers.getCommentsById); */
router.post('/comments', controllers.createComment);
/* router.put('/comments/:id', controllers.updateComment);
router.delete('/comments/:id', controllers.deleteComment); */
module.exports = router;
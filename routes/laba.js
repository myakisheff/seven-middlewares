const express = require('express');
const router = express.Router();

const getMainPage = require('../middlewares/GetMainPage');
const getStats = require('../middlewares/GetStats');
const comment = require('../middlewares/SendComments');
const auth = require('../middlewares/Authorization');
const dataB = require('../services/db')

/* const connect = require('../configs/connectDB');
router.use(connect); */

const bodyParser = require('body-parser');
router.use(bodyParser.json());

//router.use(auth.checkApiKey);

router.get("/", getMainPage);

router.get("/stats", getStats);

router.get("/comments", dataB.getComments);

router.post("/comments", comment.validateComment, comment.sendComment, dataB.addComment);

module.exports = router;
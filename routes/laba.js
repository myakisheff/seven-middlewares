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

module.exports = router;
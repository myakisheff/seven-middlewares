const express = require('express');
const router = express.Router();

const getMainPage = require('../middlewares/GetMainPage');
const getStats = require('../middlewares/GetStats');
const comment = require('../middlewares/SendComments');
const auth = require('../middlewares/Authorization');

router.use(auth);

router.get("/", getMainPage);

router.get("/stats", getStats);

router.post("/comments", comment);

module.exports = router;
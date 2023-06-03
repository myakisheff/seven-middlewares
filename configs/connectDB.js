const mongoose = require('mongoose');

async function getConnection() {
    mongoose.connect('mongodb://127.0.0.1:27017/comments')
    .then((res) => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));
}


module.exports = getConnection;
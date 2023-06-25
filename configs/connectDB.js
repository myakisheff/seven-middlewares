/* const mongoose = require('mongoose');

async function getConnection() {
    mongoose.connect('mongodb://127.0.0.1:27017/comments')
    .then((res) => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));
}

/////----/////

module.exports = getConnection; */

/* const { MongoClient } = require('mongodb');

async function getConnection() {
    const client = new MongoClient('127.0.0.1:27017');

    console.log('db-hi');

    await client.connect();

    console.log('db-end');
}

module.exports = getConnection; */
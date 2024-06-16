require('dotenv').config();
const mongoose = require('mongoose');

async function connectToMongoDB() {
    return mongoose.connect(process.env.MONGO_URL);
}

module.exports = {
    connectToMongoDB,
};
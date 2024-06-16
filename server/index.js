const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./Routes/url');

const app = express();


try{
    connectToMongoDB().then(() => {
        console.log("Conected to MongoDB");
    });
}
catch(err){
    console.log(err);
}

app.use(cors());

app.use(express.json());

app.use('/url', urlRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running at PORT ${process.env.PORT}`);
})
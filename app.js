const express = require('express');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const dbConnect = require('./service/dbConnect');
const { urlencoded } = require('body-parser');
const port = process.env.PORT || 8970;
const app = express();
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/js'))
app.use('/', userRoute);

const server = async()=>{
    await dbConnect.authenticate();
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })
}

server();

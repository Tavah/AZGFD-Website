const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const { resolveSoa } = require('dns');
const { MongoClient } = require('mongodb');

dotenv.config({ path: './.env'});

const app = express();

// const { } = require('./helpers/hbs');
// const { appendFile } = require('fs');

app.engine('.hbs', exphbs.engine({
    //helpers: {},
    defaultLayout: 'main',
    extname: '.hbs' }))

app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public',)))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROUTES
app.use('/', require('./routes/index'));

MongoClient.connect(url).then(client => {

    client.close();

}).catch(err => {
    console.log('Connection Error: ', err);
});

const PORT = process.env.PORT || 3000;

app.listen(
    PORT, console.log(`SERVER running in MODE: ${process.env.NODE_ENV} on PORT: ${PORT}`)
);
//require express library(important)
require('dotenv').config();
const express = require('express');
const routes = require('./controllers/burgers_controller');

//require handlebars module
const expressHB = require('express-handlebars');

//specify port the application will run on(important)
const PORT = process.env.PORT || 3500;

//create an instance of express from line 1(important)
const app = express();

//default view folder
app.use(express.static('public'));

//configure express.json(important)
app.use(express.urlencoded({ extended: true }));
//use express.json
app.use(express.json());

//set handlebars as the default template engine
app.engine('handlebars', expressHB({ defaultLayout: 'main' }));
//use handlebars
app.set('view engine', 'handlebars');

//use exported routes
app.use(routes);

//listen for requests to specified port number(important)
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})


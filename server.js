const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');

const { getHomePage, getSurveyPage } = require('./app/routes/view');

const app = express();
const PORT = process.env.PORT || 5000;

// set public folder
app.use(express.static(path.join(__dirname, 'app/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'handlebars');

// Express Validator Middleware
app.use(expressValidator());

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}!`);
});

// routes for the app
app.get('/', getHomePage);
app.get('/survey', getSurveyPage);

// Route Files
let friends = require('./app/routes/api');
app.use('/api', friends);

// 404 not found view
app.use('*', (req, res) => {
  res.render('404Page');
});
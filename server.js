const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const { getHomePage, getSurveyPage } = require('./app/routes/view');

const app = express();
const port = 3000;

// set public folder
app.use(express.static(path.join(__dirname, 'app/public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'handlebars');

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});

// routes for the app
app.get('/', getHomePage);
app.get('/survey', getSurveyPage);

// Route Files
let friends = require('./app/routes/api');
app.use('/api', friends);

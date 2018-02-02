const express = require('express');
const stripe = require('stripe')('!!!!! STRIPE PRIVATE KEY GOES HERE !!!!!'); // REVIEW: get key from stripe
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// SET STATIC FOLDER
app.use(express.static(`${__dirname}/public`));

// INDEX ROUTE
app.get('/', (req, res) => {
	res.render('index');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

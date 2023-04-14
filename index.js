const express = require('express');
const reactViews = require('express-react-views');

const app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/', (req, res) => {
	res.render('index.html');
})

app.listen(() => console.log(`Server is up!`));
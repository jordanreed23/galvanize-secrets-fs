const express = require('express');
const hbs = require('hbs');
const webRoutes = require('./routes/index');
const db = require('./db/query');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use('/', webRoutes);
app.use(express.static('public'));

app.listen(port, () => console.log(`App listening on port: ${port}`));

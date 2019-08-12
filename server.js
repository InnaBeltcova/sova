const { port } = require('./config');
const express = require('express');
const app = express();
require('./app/routes.js')(app);

app.set('view engine', 'ejs');
app.listen(port, () => console.log(`The magic happens on port ${port}`))

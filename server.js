const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database'); 
app.use(express.json()); 
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));

app.get('/*',(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});
var express = require('express');
var bodyParser = require('body-parser');

var gallery = require('./routes/gallery')

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/gallery', gallery);

app.listen(port, function () {
    console.log('up and running on port', port);
});

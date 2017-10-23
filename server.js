var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var cors        = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/index', function(request, response) {
    let responseService = { answer: 'Hey man!' };
    response.json(responseService);
});

var port = process.env.PORT || 8080;
app.listen(port);
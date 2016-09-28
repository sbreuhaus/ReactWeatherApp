var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000; //variable to rep what ever port Heroku gives

app.use(function(req, res, next){ //openweathermap only supports http traffic
  if (req.headers['x-forwarded-proto'] === 'http') { //check if equal to http
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('express server is running on port ' + PORT);
});

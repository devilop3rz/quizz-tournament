//var express = require('express');
var path = require('path');

/*
var port = process.env.PORT || 3000;
var app = express();
 
app.use('/public', express.static(path.resolve('./public')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));
 
var renderIndex = function (req, res) {
    //res.render(path.resolve('./public/index.html'));
    res.send('HELLO')
}
 
app.get('/', renderIndex);
 
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on %s', host, port);
});


*/
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../public'));
app.use('/node_modules', express.static(path.resolve('./node_modules')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
var express = require('express');
var sockjs = require('sockjs');
var http = require('http');
var LiveSelect = require('mysql-live-select');
var mysql = require('mysql');

var dbSettings = require('./settings');
var sockOptions = {
  sockjs_url: "http://cdn.jsdelivr.net/sockjs/0.3.4/sockjs.min.js"
};

// Initialize components
var liveDb = new LiveSelect(dbSettings);
var app = express();
var server = http.createServer(app);
var sock = sockjs.createServer(sockOptions);

var db_connection = mysql.createConnection(dbSettings);
// Cache socket connections
var connected = [];

// Initialze result set
var results = liveDb.select('select * from meters order by id desc', [ {
  table: 'meters'
} ]).on('update', function(diff, data){
  var msg = JSON.stringify({
    type: 'diff',
    data: diff
  });
  // Send change to all clients
  connected.forEach(function(conn){
    conn.write(msg);
  });
});

// Socket event handler
sock.on('connection', function(conn) {
  connected.push(conn);

  // Provide initial result set snapshot
  conn.write(JSON.stringify({
    type: 'init',
    data: results.data
  }));

  conn.on('close', function() {
    // On close, remove connection from connection list
    var index = connected.indexOf(conn);
    connected.splice(index, 1);
  });
});

// Express configuration
sock.installHandlers(server, { prefix:'/sock' });
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/history.html', function (req, res) {
  var poolName = req.query.name;
  var type = req.query.type;
  console.log("name:" + poolName + ", type:" + type);
  db_connection.query("SELECT * FROM historydata WHERE name='"+ poolName +"' AND type='"+type +"' order by exetime desc", function(err, rows, fields) {
    var data = {
      historyData: JSON.stringify(rows)
    };
    res.render('history', data);
  });
});

app.use('/', express.static(__dirname + '/public'));

server.listen(5000);

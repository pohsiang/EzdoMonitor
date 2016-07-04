var results = [];

var scoreList = React.render(
  <MeterList results={results} />,
  document.getElementById('show_meters')
);

var sock = new SockJS('/sock');
sock.onmessage = function(e) {
  var msg = JSON.parse(e.data);
  switch(msg.type){
    case 'init':
      results = msg.data.slice();
      break;
    case 'diff':
      results = window.applyDiff(results, msg.data);
      break;
  }
  scoreList.setProps({ results: results });
};

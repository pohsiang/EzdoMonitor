var MeterList = React.createClass({
  getInitialState: function() {
    return {
      active: null,
      newItems: []
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if(this.state.newItems.length){
      // Reset latency compensation
      this.setState({ newItems: [] });
    }
  },
  render: function() {
    var results = this.props.results;
    var items = [];
    for(var i = 0; i < results.length; i++){
      items.push(<MeterItem key={results[i].name} item={results[i]} />);
    }
    return (
      <table className="meters">
        <tr>
            <th>名稱</th>
            <th>酸鹼度</th>
            <th>溶氧量</th>
            <th>電導度</th>
            <th>氧化還原</th>
            <th>電導度</th>
        </tr>
        {items}
      </table>
    );
  }
});

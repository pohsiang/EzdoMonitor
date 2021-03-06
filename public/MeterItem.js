var MeterItem = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      ph: 0,
      ph_unit: "",
      datetime: "",
      status: 0
//      orp: 0,
//      o: 0,
//      ec: 0,
//     cond: 0
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if(this.state.score){
      // Reset latency compensation
      this.setState({ id: null });
    }
  },
  render: function() {
    var item = this.props.item;
    var className = item.name;
    var historyUrl = "history.html?name=" + className;
    if (item.status == 0) {
        return (
            <tr className={className}>
            <td className="name">{item.name}</td>
            <td className="ph" ><a href={historyUrl + "&type=pH"}>{item.ph}{item.ph_unit}</a> </td>
            <td className="time">{item.datetime}</td>
            </tr>
        );
    } else if (item.status == 1){
        return (
            <tr className={className}>
            <td className="name">{item.name}</td>
            <td className="ph alert" ><a href={historyUrl + "&type=pH"}>{item.ph}{item.ph_unit}</a> </td>
            <td className="time">{item.datetime}</td>
            </tr>
        );
    }
  }
});

var MeterItem = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      ph: 0,
      ph_unit: "",
      nowtime: "",
      status: ""
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
    if (item.status == 0) {
        return (
            <tr className={className}>
            <td className="name">{item.name}</td>
            <td className="ph" >{item.ph}{item.ph_unit} </td>
            <td className="time">{item.nowtime}</td>
            </tr>
        );
    } else if (item.status == 1){
        return (
            <tr className={className}>
            <td className="name">{item.name}</td>
            <td className="ph alert" >{item.ph}{item.ph_unit} </td>
            <td className="time">{item.nowtime}</td>
            </tr>
        );
    }
  }
});

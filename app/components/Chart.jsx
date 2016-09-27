var React = require('react');
var ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.
var Highcharts = require('highcharts');

var Chart = React.createClass({
  getInitialState: function(){
    return {
      title: {text: "Stephen's Weather App"},
      subtitle: {text: '7 day highs'},
      xAxis: {categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']},
      series: [{
        name: 'City',
        data: [null],
        lineWidth: 10,
        // yAxis: {title:{text:'temp'}},
     }]
   }
  },

  handleUpdateChart: function(){
    let chart = this.refs.chart.getChart();
    let dayWeather = this.props.dayWeather; // Array!!
    let temp;
    chart.series[0].data.splice(0, 1); // loops through forecast array and pushed temps into data config
        for (var i = 0; i < dayWeather.length; i++) {
        temp = dayWeather[i].temp.max;
        chart.series[0].data.push(temp);
    };

    chart.series[0].temp = this.props.temp;
    this.setState({
      series: [{
        name: this.props.location,
        data: chart.series[0].data,
        lineWidth: 10,
        // yAxis: {title:{text:'temp'}},
     }]
    })
  },

  componentDidMount: function() {
    return this.handleUpdateChart();
  },

  render: function() {
    return (
      <div>
        <ReactHighcharts config={this.state} ref="chart"></ReactHighcharts>
      </div>
    )
  } // end of render
});

module.exports = Chart;

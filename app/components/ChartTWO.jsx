const React = require('react');
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.
const Highcharts = require('highcharts');

const config = {
  /* HighchartsConfig */
  title: {text: "Stephen's Weather App"},
  subtitle: {text: 'Here is your 7 day forecast'},
  xAxis: {categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']},
  series: [{
    name: '',
    data: [],
    lineWidth: 10,
    // yAxis: {title:{text:'temp'}},
 }]
};

 // Add additional module required to render a treemap.
var Chart = React.createClass({
    render: function () {
        return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
    }
});

module.exports = Chart;

//////////////

class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      title: {text: "Stephen's Weather App"},
      subtitle: {text: 'Here is your 7 day forecast'},
      xAxis: {categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']},
      series: [{
        name: '',
        data: [null],
        lineWidth: 10,
        // yAxis: {title:{text:'temp'}},
     }]
    };
  }

  componentDidMount() {
    let chart = this.refs.chart.getChart();
    console.log('CHART DATA', chart.series[0].name);
    // let chartName = chart.series[0].name;

    console.log("PROPS componentDidMount", this.props.dayWeather);
    let dayWeather = this.props.dayWeather; // Array!!
    let temp;
    chart.series[0].data.splice(0, 1);
        for (var i = 0; i < dayWeather.length; i++) {
        temp = dayWeather[i].temp.day;
        chart.series[0].data.push(temp);
    };
    console.log('Chart should have data', chart.series[0].data);
    chart.series[0].name = this.props.location;
    chart.series[0].temp = this.props.temp;
  }

  render() {

    return (
      <div>
        <ReactHighcharts config={this.state} ref="chart"></ReactHighcharts>
      </div>
    )
  }
}

module.exports = Chart;

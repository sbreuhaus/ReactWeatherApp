const React = require('react');
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.

const config = {
  /* HighchartsConfig */
  title: {text: 'Stephen'},
  subtitle: {text: 'gonna be some weather data here'},
  series: [{
    name: 'blah',
    data: [1,2,3,4,5],
    lineWidth: 10,
    // yAxis: {title:{text:'temp'}},
}]
};

class Chart extends React.Component {
  // componentDidMount() {
  //   // let chart = this.refs.chart.getChart();
  //   // console.log(chart);
  //   // chart.series[0].addPoint({x: 10, y: 12});
  //   console.log("chart mounted");
  // }

  render() {
    return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
  }
}

export default Chart;

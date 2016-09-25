const React = require('react');
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.
const Highcharts = require('highcharts');

/*
var Chart = React.createClass({

  getInitialState: function(){
    return  {

        title: {text: 'Stephen'},
        subtitle: {text: 'gonna be some weather data here'},
        xAxis: {categories: ['2am', '3am', '4am', '5am', '6am', '7am', '8am']},
        series: [{
          name: 'blah',
          data: [60,64.3,73.2,68.9,90.3],
          lineWidth: 10,

       }]
     };
  },


  componentWillReceiveProps: function(location){
    // this.chart.highcharts().series[0].setData(props.data);
    this.setState({
      title: {text: 'boston'}
    });
  },

  render: function () {
    var apiRes = this.props;
    console.log("this is props for renderchart", apiRes);
    // function renderChart(){
    //   console.log("Inside renderchart");
    //   if(apiRes){
    //
    //     console.log("WE HAVE DATA FROM apiRes");
    //
    //  }
    // }
    return (
      <div>
        <ReactHighcharts temp={`${apiRes.temp}`} config={this.state} ref="chart"/>
        <h1>map will show</h1>

      </div>
    )
  }
});
*/
// const config = {
//         /* HighchartsConfig */
//         title: {text: 'Stephen'},
//         subtitle: {text: 'gonna be some weather data here'},
//         xAxis: {categories: ['2am', '3am', '4am', '5am', '6am', '7am', '8am']},
//         series: [{
//           name: 'blah',
//           data: [60,64.3,73.2,68.9,90.3],
//           lineWidth: 10,
//           // yAxis: {title:{text:'temp'}},
//        }]
//      };

// var Chart = (props) => {
//
//     return(
//       <ReactHighcharts/>
//     )
// }


// module.exports = React.createClass({
//     // When the DOM is ready, create the chart.
//     componentDidMount: function () {
//         // Extend Highcharts with modules
//         if (this.props.modules) {
//             this.props.modules.forEach(function (module) {
//                 module(Highcharts);
//             });
//         }
//         // Set container which the chart should render to.
//         this.chart = new Highcharts[this.props.type || "Chart"](
//             this.props.container,
//             this.props.options
//         );
//     },
//     //Destroy chart before unmount.
//     componentWillUnmount: function () {
//         this.chart.destroy();
//     },
//     //Create the div which the chart will be rendered to.
//     render: function () {
//         return React.createElement('div', { id: this.props.container });
//     }
// });

// class Chart extends React.Component {
// 	constructor(props) {
//     	super(props);
//
//         this.state = {pieData: [{name: "Firefox",y: 6},{name: "MSIE",y: 4},{name: "Safari",y: 4},{name: "Opera",y: 1},{name: "Chrome",y: 7}]}
//
//     }
//
//
// 	render() {
//     	return <DonutChart data = {this.state.pieData}/>
//     }
//  }
//
// class DonutChart extends React.Component {
// 	constructor(props) {
//     	super(props);
//         this.chart = undefined;
//     }
//
//   componentDidMount() {
// 	this.chart = $(React.findDOMNode(this.refs.chart)).highcharts({
//             chart: {
//                 type: 'pie'
//             },
//             title: 'Browser Market sahre',
//             yAxis: {
//                 title: {
//                     text: 'Total percent market share'
//                 }
//             },
//             plotOptions: {
//                 pie: {
//                     shadow: false
//                 }
//             },
//
//             series: [{
//                 name: 'Browsers',
//                 data: this.props.data,
//                 size: '100%',
//                 innerSize: '85%',
//                 showInLegend:true,
//                 dataLabels: {
//                     enabled: true
//                 }
//             }]
//         });
//   }
//
//   componentWillReceiveProps(props) {
//   	this.chart.highcharts().series[0].setData(props.data);
//   }
//
//   render() {
//       return (
//         <div ref='chart'>
//         </div>
//       )
//   }
// }

const config = {
  /* HighchartsConfig */
  title: {text: "Stephen's Weather App"},
  subtitle: {text: 'Here is your 7 day forecast'},
  xAxis: {categories: ['2am', '3am', '4am', '5am', '6am', '7am', '8am']},
  series: [{
    name: '',
    data: [],
    lineWidth: 10,
    // yAxis: {title:{text:'temp'}},
 }]
};

class Chart extends React.Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart();
    console.log("PROPS componentDidMount", this.props);
    chart.series[0].name = this.props.location;
    chart.series[0].temp = this.props.temp;
  }

  render() {
    return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
  }
}

module.exports = Chart;

var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');
import Chart from './Chart';

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false
    }
  },

  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true})
    openWeatherMap.getTemp(location).then(function(main){
      console.log("main ", main);
      that.setState({
        location: location,
        temp: main.temp,
        humidity: main.humidity,
        pressure: main.pressure,
        tempMin: main.temp_min,
        tempMax: main.temp_max,
        isLoading: false
      })
    }, function(errorMessage){
      that.setState({isLoading: false})
      alert(errorMessage)
    })
  },


  render: function(){
    var {temp, location, humidity, isLoading,} = this.state;
    function renderMessage(){
      console.log('inside renderMessage');
      if (isLoading){
        return <h3>Fetching weather...</h3>;
          console.log("renderMessage if statement");
      } else if (temp && location){
        console.log("renderMessage else if");
        return(
          <div>
            <Message temp={temp} location={location} humidity={humidity}/>
            <Chart temp={temp} location={location} humidity={humidity}/>
          </div>
        )
      }
    }

    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  } // end of render
});

module.exports = Weather;

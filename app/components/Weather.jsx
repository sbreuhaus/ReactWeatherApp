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
      // let dayWeather1 = main.list[0],
      //     dayWeather2 = main.list[1],
      //     dayWeather3 = main.list[2],
      //     dayWeather4 = main.list[3],
      //     dayWeather5 = main.list[4],
      //     dayWeather6 = main.list[5],
      //     dayWeather7 = main.list[6];
      let dayWeather = [];
      for (var i = 0; i < main.list.length; i++) {
        dayWeather.push(main.list[i]);
      }
      console.log('dayWeather', dayWeather);
      that.setState({
        location: location,
        dayWeather: dayWeather,
        temp: dayWeather[0].temp.day,
        humidity: dayWeather[0].humidity,
        /* orignal 1 dayWeatherWeather api call
        temp: main.temp,
        humidity: main.humidity,
        pressure: main.pressure,
        tempMin: main.temp_min,
        tempMax: main.temp_max,
        */
        isLoading: false
      })
    }, function(errorMessage){
      that.setState({isLoading: false})
      alert(errorMessage)
    })
  },

  render: function(){
    var {dayWeather, temp, location, humidity, isLoading,} = this.state;
    function renderMessage(){
      if (isLoading){  // displaying message and chart is dependent on successful api call.
        return <h3>Fetching weather...</h3>;
      } else if (location){                             // took out temp
        return(
          <div>
            <Message temp={temp} location={location} humidity={humidity}/>
            <Chart dayWeather={dayWeather} location={location}/>
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

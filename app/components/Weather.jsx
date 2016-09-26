var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
import ErrorModal from './ErrorModal';
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
    this.setState({
      isLoading: true,  // boolean to show "loading"
      errorMessage: undefined // for error modal.  Clears any earlier error messages
    })
    openWeatherMap.getTemp(location).then(function(main){
      console.log("main ", main);
      let dayWeather = [];
      for (var i = 0; i < main.list.length; i++) { // pushes each day object in array
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
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  render: function(){
    var {dayWeather, temp, location, humidity, isLoading, errorMessage} = this.state;
    function renderMessage(){
      if (isLoading){  // displaying message and chart is dependent on successful api call.
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (location){                             // took out temp
        return(
          <div>
            <Message temp={temp} location={location} humidity={humidity}/>
            <Chart dayWeather={dayWeather} location={location}/>
          </div>
        )
      }
    }

    function renderError(){   /// conditional for showing modal

      if(typeof errorMessage === 'string'){  // if string exists show modal
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  } // end of render
});

module.exports = Weather;

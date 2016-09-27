var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
import ErrorModal from './ErrorModal';
var openWeatherMap = require('openWeatherMap');
import Chart from './Chart';
import Table from './Table'

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
      errorMessage: undefined, // for error modal.  Clears any earlier error messages
      location: undefined,
      temp: undefined,
      dayWeather: undefined,
      humidity: undefined
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
        tempHi: dayWeather[0].temp.max,
        tempLo: dayWeather[0].temp.min,
        humidity: dayWeather[0].humidity,
        description: dayWeather[0].weather[0].description,
        isLoading: false
      })
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  componentDidMount: function(){
    let location = this.props.location.query.location; // pulls location from url
    if(location && location.length > 0){ // checks for valid inputs
      this.handleSearch(location);
      window.location.hash = '#/'; // clears url
    }
  },

  componentWillReceiveProps: function(newProps){
    let location = newProps.location.query.location; // pulls location from url
    if(location && location.length > 0){ // checks for valid inputs
      this.handleSearch(location);
      window.location.hash = '#/'; // clears url
    }
  },

  render: function(){
    var {dayWeather, temp, location, humidity, isLoading, errorMessage, description, tempHi, tempLo
    } = this.state;

    function renderMessage(){
      if (isLoading){  // displaying message and chart is dependent on successful api call.
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (location && temp){                             // took out temp
        return(
          <div>
            <Chart dayWeather={dayWeather} location={location}/>
            <Message description={description}
                     temp={temp}
                     tempHi={tempHi}
                     tempLo={tempLo}
                     location={location}
                     humidity={humidity}/>
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

var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');

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
    var {temp, location, humidity, isLoading} = this.state;
    console.log("this should be temp and location ", temp, location);
    function renderMessage(){
      if (isLoading){
        return <h3>Fetching weather...</h3>;
      } else if (temp && location){
        return <Message temp={temp} location={location} humidity={humidity}/>;

      }
    }

    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;

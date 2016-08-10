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

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(errorMessage){
      alert(errorMessage)
    })
  },

  render: function(){
    var {temp, location, isLoading} = this.state;

    function renderMessage(){
      if (isLoading){
        return <h3>Fetching weather...</h3>;
      } else if (temp && location){
        return <Message temp={temp} location={location}/>;

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

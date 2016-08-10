var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      location: 'Miami',
      temp: 88
    }
  },

  handleSearch: function(location){
    this.setState({
      location: location,
      temp: 23
    });
  },

  render: function(){
    var {temp, location} = this.state;

    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        <Message temp={temp} location={location}/>
      </div>
    )
  }
});

module.exports = Weather;

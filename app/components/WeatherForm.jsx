var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();  // prevents page from refreshing

    var location = this.refs.location.value; // input box value

    if (location.length > 0){
      this.refs.location.value = ''; // clears input box when api call is made
      this.props.onSearch(location); //onSearch = handleSearch() from Weather comp
    }
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='location' placeholder='search weather by city'/>
          <button className='button expanded hollow'>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;

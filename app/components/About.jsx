var React = require('react');
var {Link} = require('react-router');


var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is simple app built on Node, React, and Foundation.  It Utilizes openweathermap.org to retrieve data and display the 7 day tempeature highs as well as the current weather data in a table below.</p>
      <ul>
        <li>
          <a href='https://github.com/sbreuhaus/ReactWeatherApp/tree/chart'>View the souce code on Github!</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;

var React = require('react');
var {Link} = require('react-router');


var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is an app built on React, Highcharts and Foundation. It Utilizes openweathermaps.com
      to get a seven day forecast for any city around the world.</p>
      <ul>
        <li>
          <a href='https://github.com/sbreuhaus/ReactWeatherApp'>View the souce code on Github!</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;

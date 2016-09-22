var React = require('react');

var Message = ({temp, location, humidity}) => {
  // console.log('temp in message comp = ',temp);
  return(
    <h3>It is {temp} degrees in {location} with {humidity} humidity</h3>
  )
}

module.exports = Message;

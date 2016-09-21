var React = require('react');

var Message = (props) => {
  var {temp, location} = props;
  return(
    <h3>It is {temp} degrees in {location}</h3>
  )
}

module.exports = Message;

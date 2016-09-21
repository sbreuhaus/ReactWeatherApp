var React = require('react');

var Message = ({temp, location}) => {
  return(
    <h3>It is {temp} degrees in {location}</h3>
  )
}

module.exports = Message;

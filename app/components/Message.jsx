var React = require('react');

var Message = ({temp, location, humidity}) => {
  // console.log('temp in message comp = ',temp);
  return(
    <p className='text-centered'>It is currently {temp} degrees in {location} with {humidity} % humidity</p>
  )
}

module.exports = Message;

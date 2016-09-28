var React = require('react');

var Message = ({temp, location, humidity, description, tempHi, tempLo}) => {
  // console.log('temp in message comp = ',temp);
  return(
    <div>
      <h3 className='text-center'>Today's weather in {location}</h3>
      <table className='hover'>
        <thead>
          <tr>
            <th>Currently</th>
            <th>Descrition</th>
            <th>High</th>
            <th>Lo</th>
            <th>humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{temp} deg F</td>
            <td>{description}</td>
            <td>{tempHi}</td>
            <td>{tempLo}</td>
            <td>{humidity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

module.exports = Message;

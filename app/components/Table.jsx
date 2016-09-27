var React = require('react');

var Table = React.createClass({
  getInitialState: function(){
    return{
      dayWeather: undefined
    }
  },

  handleTableUpdate: function(){
    let dayWeather = this.props.dayWeather; // Array!!
    let temp;
    chart.series[0].data.splice(0, 1); // loops through forecast array and pushed temps into data config
        for (var i = 0; i < dayWeather.length; i++) {
        temp = dayWeather[i].temp.day;
        chart.series[0].data.push(temp);
    };
  },

  componentDidMount: function(){
    return this.handleUpdateTable();
  },

  render: function(){
    return(
      <table className='hover'>
        <thead>
          <tr>
            <th width="200"></th>
            <th>Descrition</th>
            <th width="150">Temp Hi</th>
            <th width="150">Temp Lo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
        </tbody>
      </table>

    )
  }
})

module.exports = Table;

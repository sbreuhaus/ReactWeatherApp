var React = require('react');
var Nav = require('Nav');
import Chart from './Chart';


var Main = (props) => {
  return(
    <div>
      <Nav/>
      <h2>Main component</h2>
      {props.children}
      <Chart/>
    </div>
  );
}

module.exports = Main;

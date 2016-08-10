var React = require('react');

var Message = React.createClass({
  render: function(){
    return(
      <h3>It is {this.props.temp} in {this.props.location}</h3>
    )
  }
});

module.exports = Message;

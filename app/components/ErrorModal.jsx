var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function(){
    return{
      title: 'Error'  // set title for error-modal
    }
  },

  PropTypes: {  //validates props
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  componentDidMount: function(){  // called after DOM renders to trigger modal
    var modal = new Foundation.Reveal($('#error-modal')); // calls on foundation to make new modal.
    modal.open();
  },

  render: function(){
    var {title, message} = this.props;
    return(
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <button className='button hollow' data-close=''>Ok</button>
      </div>
    )
  }
});

module.exports = ErrorModal;

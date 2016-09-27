var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
    var {title, message} = this.props;
    var modalMarkup = ( // actuall markup for modal.  Prevents errors
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <button className='button hollow' data-close=''>Ok</button>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));  // use jquery to create separate DOM to add.  takes JSX and returns string
    $(ReactDom.findDOMNode(this)).html($modal); // searches for the DOM node where this component livess

    var modal = new Foundation.Reveal($('#error-modal')); // calls on foundation to make new modal.
    modal.open();  // Foundation makes changes to the DOM and React doesn't like that
  },

  render: function(){
    return(
      <div></div> // return nothing since Foundation wants to manipulate the DOM
    );
  }
});

module.exports = ErrorModal;

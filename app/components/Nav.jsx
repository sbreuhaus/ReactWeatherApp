var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if(location.length > 0){ //only trigger search if there is a location typed in the input field
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render: function(){
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React Weather App</li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

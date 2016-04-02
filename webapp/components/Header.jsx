require('styles/main.css');

import React from 'react';
import {Link} from 'react-router';

class HeaderComponent extends React.Component {
  render() {
    return (
     <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">ExpressReactBoilerplate</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/todo">ToDo</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

HeaderComponent.defaultProps = {
};

export default HeaderComponent;

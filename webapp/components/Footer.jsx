require('styles/main.css');

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
     <div id="footer">
      <div className="container">
        <p className="text-muted">Express React Boilerplate.</p>
      </div>
    </div>
    );
  }
}

FooterComponent.defaultProps = {
};

export default FooterComponent;

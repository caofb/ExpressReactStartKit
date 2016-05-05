require('styles/main.css');
import DevTools from './DevTools';
import React from 'react';
import HeaderComponent from '../components/Header';
import Footer from '../components/Footer';
class AppComponent extends React.Component {
  render() {
    return (
     <div>
        <HeaderComponent/>
        <div className="container main">
        {this.props.children}
        </div>
        <Footer/>
        {
        (() => {
          if (process.env.NODE_ENV !== 'production') {
            return <DevTools />;
          }
        })()
      }
      </div>
    );
  }
}

export default AppComponent;

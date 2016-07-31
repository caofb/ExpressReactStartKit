require('styles/main.css');
import React from 'react';
import {connect} from 'react-redux';


class HomePageComponent extends React.Component {
  constructor(props) {
        super(props);

        this.state = this.getStates();
    }
    componentDidMount () {
    }

  getStates() {
        return {
        };
  }
  startRun(){
      alert('Hello world')
  }
  render() {
    return (
      <div>     
      <div>
      <div className="page-header">
        <h1>Express React Boilerplate</h1>
      </div>
      </div>
      </div>
    );
  }
}

HomePageComponent.defaultProps = {
    dispatch: React.PropTypes.func.isRequired
};
function mapStateToProps(state) {
    return {
    };
}


export default connect(mapStateToProps)(HomePageComponent);


require('styles/main.css');
import React from 'react';
import {connect} from 'react-redux';


class ToDoPageComponent extends React.Component {
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
        <h1>Express React Boilerplate ToDo</h1>
      </div>
      </div>
      </div>
    );
  }
}

ToDoPageComponent.defaultProps = {
    dispatch: React.PropTypes.func.isRequired
};
function mapStateToProps(state) {
    return {
    };
}


export default connect(mapStateToProps)(ToDoPageComponent);


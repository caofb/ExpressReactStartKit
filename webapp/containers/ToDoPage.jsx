require('styles/main.css');
import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'
import { push } from 'react-router-redux'
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
  jumpTO(){
    //browserHistory.push('/about');
    this.props.dispatch(push('/about'));
  }
  render() {
    return (
      <div>     
      <div>
      <div className="page-header">
        <h1>ToDo 123</h1>
        <button className="btn btn-danger" onClick={this.jumpTO.bind(this)}><i className="fa fa-sign-out"/>跳转</button>
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


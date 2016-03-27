require('styles/main.css');
import React from 'react';
import Footer from '../components/Footer';
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
      <div className="container">
      <div className="page-header">
        <h1>Electron Boilerplate React</h1>
      </div>
      <button  label={'运行'} secondary={true} onClick={this.startRun.bind(this)}/>
      </div>
      <Footer/>
      </div>
    );
  }
}

HomePageComponent.defaultProps = {
    dispatch: React.PropTypes.func.isRequired
};
function mapStateToProps(state) {
    const {environment} = state;

    return {
        isShowProgressDialog:environment.isShowProgressDialog,
        progressValue:environment.progressValue,
        progressDiaoloTitle:environment.progressDiaoloTitle
    };
}


export default connect(mapStateToProps)(HomePageComponent);


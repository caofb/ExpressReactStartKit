require('styles/main.css');
import React from 'react';
import {connect} from 'react-redux';
import {login,logout}  from '../redux/modules/auth';


 class LoginPage extends React.Component {
  constructor(props) {
        super(props);

        this.state = this.getStates();
  }
  getStates() {
        return {
            email:'',
            password:''
        };
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.dispatch(login(this.state.email,this.state.password));
  }
  logoutClick(){
      this.props.dispatch(logout());
  }
  handleEmailChange(event){
     this.setState({
         email:event.target.value
     }) 
  }
  handlePassChange(event){
      this.setState({
         password:event.target.value
     }) 
  }
  render() {
    const {user, logout} = this.props;
    return (
      <div>
        <h1>Login</h1>
        {!user &&
        <div>
          <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
           <div className="form-group">
              <label htmlFor="inputEmail1">Email address</label>
              <input type="email" className="form-control" id="inputEmail1" placeholder="Email" value={this.state.email}  onChange={this.handleEmailChange.bind(this)}/>
           </div>
            <div className="form-group">
                <label htmlFor="inputPassword1">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"  value={this.state.password}  onChange={this.handlePassChange.bind(this)}/>
            </div>
            <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}><i className="fa fa-sign-in"/>{' '}Log In
            </button>
          </form>
          <p>This will "log you in" as this user, storing the username in the session of the API server.</p>
        </div>
        }
        {user &&
        <div>
          <p>You are currently logged in as {user.name}.</p>

          <div>
            <button className="btn btn-danger" onClick={this.logoutClick}><i className="fa fa-sign-out"/>{' '}Log Out</button>
          </div>
        </div>
        }
      </div>
    );
  }
}
LoginPage.defaultProps = {
    dispatch: React.PropTypes.func.isRequired
};
function mapStateToProps(state) {
    const {auth} = state;

    return {
        user:auth.user
    };
}


export default connect(mapStateToProps)(LoginPage);
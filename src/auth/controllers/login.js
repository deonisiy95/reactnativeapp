import React, {Component} from 'react';
import Login from '../components/Login';

export default class LoginController extends Component {
  signup = () => {
    this.props.navigation.navigate('signup');
  };

  render() {
    return <Login onSignup={this.signup} />;
  }
}

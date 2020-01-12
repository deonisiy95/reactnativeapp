import React, {Component} from 'react';
import Signup from '../components/Signup';

export default class SignupController extends Component {
  goBack = () => {
    this.props.navigation.navigate('drawer');
  };

  render() {
    return <Signup goBack={this.goBack} />;
  }
}

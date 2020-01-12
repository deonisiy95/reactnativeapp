import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

import Logo from '../../../core/components/logo';
import Form from '../../../core/components/form';

export default class Login extends Component {
  render() {
    const {onSignup} = this.props;
    return (
      <View style={styles.container}>
        <Logo />
        <Form type='Login' />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={onSignup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

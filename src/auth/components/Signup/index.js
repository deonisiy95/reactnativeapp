import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

import Logo from '../../../core/components/logo';
import Form from '../../../core/components/form';

export default class Signup extends Component {
  render() {
    const {goBack} = this.props;
    return (
      <View style={styles.container}>
        <Logo />
        <Form type='Signup' />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={goBack}>
            <Text style={styles.signupButton}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

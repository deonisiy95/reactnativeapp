import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import styles from './styles';
import Logo from '../../../core/components/logo';
import {grayscale0, mainColor} from '../../../core/styles/global';
import Validation from '../../../core/scripts/validation';
import Toast from 'react-native-simple-toast';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const {onSignup, loading} = this.props;
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.from}>
          <TextInput
            style={styles.inputBox}
            placeholder='Email'
            placeholderTextColor={grayscale0}
            selectionColor={grayscale0}
            keyboardType='email-address'
            onSubmitEditing={() => this.passwordRef.focus()}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={styles.inputBox}
            placeholder='Password'
            secureTextEntry={true}
            placeholderTextColor={grayscale0}
            ref={input => (this.passwordRef = input)}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.button} onPress={this.onLogin}>
            {loading ? (
              <ActivityIndicator size='small' color={grayscale0} style={styles.spinner} />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={onSignup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onLogin = () => {
    const {onLogin} = this.props;
    if (this.props.loading) {
      return;
    }
    const email = this.state.email;
    const password = this.state.password;

    if (!Validation.notEmpty(email) || !Validation.notEmpty(password)) {
      Toast.show('Заполните все поля',Toast.LONG);
      return;
    }

    if (!Validation.isEmail(email)) {
      Toast.show('Неверный формат email',Toast.LONG);
      return;
    }

    onLogin(email, password);
  };
}

import React, {Component} from 'react';
import Login from '../components/Login';
import {connect} from 'react-redux';
import {setTokens} from '../actions';
import Api from '../services/api';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

class LoginController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  signup = () => {
    //this.props.navigation.navigate('signup');
    console.log(this.props.auth);
  };

  login = (email, password) => {
    this.setState({loading: true});
    Api.login(email, password)
      .then(async result => {
        this.setState({loading: false});
        const userToken = {
          token: result.tokens.accessToken,
          refreshToken: result.tokens.refreshToken
        };
        this.props.setTokens(userToken);
        await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
      })
      .catch(error => {
        this.setState({loading: false});
        if (error.status === 400) {
          Toast.show('Неправильный логин или пароль', Toast.LONG);
          return;
        }
        Toast.show('Ошибка', Toast.LONG);
      });
  };

  render() {
    return <Login onSignup={this.signup} onLogin={this.login} loading={this.state.loading} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  setTokens: ({token, refreshToken}) => dispatch(setTokens({token, refreshToken}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginController);

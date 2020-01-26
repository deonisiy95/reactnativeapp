import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {setTokens} from './auth/actions';
import {connect} from 'react-redux';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (!userToken) {
      this.props.navigation.navigate('auth');
      return;
    }
    this.props.navigation.navigate('drawer');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTokens: ({token, refreshToken}) => dispatch(setTokens({token, refreshToken}))
});

export default connect(
  null,
  mapDispatchToProps
)(AuthLoadingScreen);

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {grayscale0} from '../../styles/global';

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder='Email'
          placeholderTextColor={grayscale0}
          selectionColor={grayscale0}
          keyboardType='email-address'
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor={grayscale0}
          ref={input => (this.password = input)}
        />
        <TouchableOpacity style={styles.button} onPress={() => {this.props.onPress && this.props.onPress()}}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

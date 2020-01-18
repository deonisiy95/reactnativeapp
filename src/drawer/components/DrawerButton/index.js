import React from 'react';
import {TouchableNativeFeedback, View, Image} from 'react-native';
import styles from './styles';

export default function DrawerButton({onOpenDrawer}) {
  let source = require('./images/menu.png');
  return (
    <View>
      <TouchableNativeFeedback
        onPress={onOpenDrawer}
      >
        <View style={styles.container}>
          <Image source={source} style={styles.icon}/>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}


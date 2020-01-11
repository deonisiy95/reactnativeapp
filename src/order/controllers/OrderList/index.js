import React, {Component} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

import OrderItem from '../../components/Item';
import {grayscale45} from '../../../core/styles/global';

const data = [
  {title: true, name: 'title'},
  {name: 'Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1', details: 'details'},
  {name: 'Улица 2', details: 'details'},
  {name: 'Улица 3', details: 'details'},
  {name: 'Улица 4', details: 'details'},
  {name: 'Улица 5', details: 'details'},
  {name: 'Улица 6', details: 'details'},
  {name: 'Улица 7', details: 'details'},
  {name: 'Улица 8', details: 'details'},
  {name: 'Улица 9', details: 'details'},
  {name: 'Улица 10', details: 'details'},
  {name: 'Улица 11', details: 'details'},
  {name: 'Улица 12', details: 'details'},
  {name: 'Улица 13', details: 'details'},
  {name: 'Улица 14', details: 'details'},
  {name: 'Улица 15', details: 'details'}
];

export default class OrderList extends Component {
  render() {
    return <FlatList renderItem={this.renderItem} data={data} keyExtractor={item => item.name} />;
  }

  renderItem = ({item}) => {
    if (item.title) {
      return (
        <View style={styles.title}>
          <Text style={styles.titleText}>Заказы</Text>
          <Text style={styles.titleText}>Трансляция геопозиции</Text>
        </View>
      );
    }
    return <OrderItem name={item.name} details={item.details} />;
  };
}

const styles = StyleSheet.create({
  title: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 8,
    paddingTop: 8
  },
  titleText: {
    color: grayscale45
  }
});

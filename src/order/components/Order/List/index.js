import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import OrderItem from '../Item';
import styles from './styles';

export default class OrderList extends Component {
  render() {
    const {orders} = this.props;
    return (
      <FlatList
        style={styles.list}
        renderItem={this.renderItem}
        data={orders}
        keyExtractor={item => item.name}
      />
    );
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
    return <OrderItem name={item.name} details={item.details} navigation={this.props.navigation} />;
  };
}

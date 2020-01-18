import React, {Component} from 'react';
import OrderList from '../components/Order/List';
import DrawerButton from '../../drawer/controllers/DrawerButton';

const data = [
  {title: true, name: 'title'},
  {
    name: 'Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1Улица 1',
    details: 'details'
  },
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

export default class OrderListController extends Component {
  static navigationOptions = ({navigation}) => {
    const headerTitle = 'Main';
    const headerStyle = {backgroundColor: 'orange'};
    const headerTitleStyle = {fontWeight: 'bold'};
    const headerLeft = () => <DrawerButton navigation={navigation} />;
    return {headerTitle, headerStyle, headerTitleStyle, headerLeft};
  };

  render() {
    return <OrderList orders={data} navigation={this.props.navigation} />;
  }
}

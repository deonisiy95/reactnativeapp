import React from 'react';
import {DrawerActions} from 'react-navigation-drawer';
import DrawerButton from '../components/DrawerButton';

export default function DrawerButtonController({navigation}) {
  const onOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <DrawerButton onOpenDrawer={onOpenDrawer} />
  );
}


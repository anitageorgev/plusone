import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { OmitProps } from 'antd/lib/transfer/renderListBody';

export default function TabBarIcon(props) {
  // return (
  //   <Ionicons
  //     name={props.name}
  //     size={26}
  //     style={{ marginBottom: -3 }}
  //     color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  //   />
  // );
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? '#D86F9B' : '#91BE56'}
    />
  );
}

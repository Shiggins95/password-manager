import React, { FC } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { IconProps } from './icon.type';

const Icon: FC<IconProps> = ({ style, name, size, color, provider }) => {
  switch (provider) {
    case 'AntDesign':
      return <AntDesign name={name} style={style} size={size} color={color} />;
    case 'Ionicons':
      return <Ionicons name={name} style={style} size={size} color={color} />;
    case 'Feather':
      return <Feather name={name} style={style} size={size} color={color} />;
    case 'Entypo':
      return <Entypo name={name} style={style} size={size} color={color} />;
  }
};

export default Icon;

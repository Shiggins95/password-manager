import React, { FC } from 'react';
import { secondary } from '../../../vars.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../../navigate';

const BackButton: FC = () => {
  return (
    <TouchableOpacity onPress={() => navigate.back()}>
      <AntDesign size={24} name="arrowleft" color={secondary} />
    </TouchableOpacity>
  );
};

export default BackButton;

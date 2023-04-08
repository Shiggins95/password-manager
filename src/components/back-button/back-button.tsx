import React, { FC } from 'react';
import { secondary } from '../../../vars.styles';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../../navigate';
import Icon from '../../library/icon/icon';

const BackButton: FC = () => {
  return (
    <TouchableOpacity onPress={() => navigate.back()}>
      <Icon provider="AntDesign" size={24} name="arrowleft" color={secondary} />
    </TouchableOpacity>
  );
};

export default BackButton;

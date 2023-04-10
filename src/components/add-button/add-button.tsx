import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../../library/icon/icon';
import { AddButtonProps } from './add-button.type';
import { secondary } from '../../../vars.styles';

const AddButton: FC<AddButtonProps> = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name="ios-create-outline" provider="Ionicons" size={24} color={secondary} />
    </TouchableOpacity>
  );
};

export default AddButton;

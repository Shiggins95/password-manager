import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonProps, ButtonStyleKey, ButtonType } from './button.type';
import Body from '../body/body';
import { BodyType } from '../body/body.type';
import { styles } from './button.style';
import { primary } from '../../../../encropass/vars.styles';

const Button: FC<ButtonProps> = ({ type, text, onPress, disabled, margin }) => {
  let styleKey: ButtonStyleKey;
  let color = '';
  switch (type) {
    case ButtonType.Primary:
      styleKey = 'primary';
      color = 'white';
      break;
    case ButtonType.Secondary:
      styleKey = 'secondary';
      color = 'white';
      break;
    case ButtonType.Tertiary:
      styleKey = 'tertiary';
      color = primary;
      break;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.default, styles[styleKey], margin ? styles.margin : null]}
    >
      <Body type={BodyType.Bold} text={text} color={color} />
    </TouchableOpacity>
  );
};

export default Button;

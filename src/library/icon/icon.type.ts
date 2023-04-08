import { StyleProp } from 'react-native';

export interface IconProps {
  name: string;
  provider: 'AntDesign' | 'Ionicons' | 'Feather';
  size?: number;
  style?: StyleProp<any>;
  color?: string;
}

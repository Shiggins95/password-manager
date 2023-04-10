import { StyleProp } from 'react-native';

export interface IconProps {
  name: string;
  provider: 'AntDesign' | 'Ionicons' | 'Feather' | 'Entypo';
  size?: number;
  style?: StyleProp<any>;
  color?: string;
}

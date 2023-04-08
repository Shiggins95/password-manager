import { StyleProp } from 'react-native';

export enum BodyType {
  Normal = 'Normal',
  Bold = 'Bold',
  Small = 'Small',
  BoldSmall = 'BoldSmall',
  Link = 'Link',
  LinkSmall = 'LinkSmall',
}

export type BodyStyleKey = 'normal' | 'bold' | 'small' | 'boldSmall' | 'link' | 'linkSmall';

export interface BodyProps {
  type: BodyType;
  text: string;
  margin?: boolean;
  color?: string;
  style?: StyleProp<any>;
}

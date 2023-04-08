export enum ButtonType {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

export type ButtonStyleKey = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps {
  type: ButtonType;
  text: string;
  onPress: () => void;
  disabled?: boolean;
  margin?: boolean;
}

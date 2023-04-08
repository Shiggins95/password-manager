export enum ButtonType {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

export interface ButtonProps {
  type: ButtonType;
  text: string;
  onPress: () => void;
  disabled?: boolean;
  margin?: boolean;
}

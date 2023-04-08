import * as React from 'react';
import { TextInput } from 'react-native';

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  onBlur?: () => void;
  onSubmit?: () => void;
  onFocus?: () => void;
  inputRef?: React.MutableRefObject<TextInput | null>;
  margin?: boolean;
}

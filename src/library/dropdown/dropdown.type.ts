export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  label: string;
  handleChange: (value: string) => void;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  contentTitle?: string;
  cleanup?: () => void;
}

export enum SnackbarType {
  Error = 'Error',
  Success = 'Success',
  Warning = 'Warning',
}

export interface SnackbarProps {
  text: string;
  type: SnackbarType;
  timeout?: number;
  callback: () => void;
}

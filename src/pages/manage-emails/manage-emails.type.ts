import { Email } from '../../api/email-api.type';
import { SnackbarType } from '../../library/snackbar/snackbar.type';

export interface EmailRowProps {
  email: Email;
  handleUpdate: (id: string) => void;
  handleDelete: (id: string) => void;
}

export interface EmailSnackbar {
  type?: SnackbarType;
  text?: string;
  callback?: () => void;
  show: boolean;
}

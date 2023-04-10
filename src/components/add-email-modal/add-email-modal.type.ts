import { Email } from '../../api/email-api.type';

export interface AddEmailModalProps {
  handleClose: (createdSuccessfully?: boolean) => void;
  allEmails: Email[];
}

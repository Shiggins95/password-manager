export interface EmailApiProps {
  userId: string;
}
export interface Email {
  id: string;
  email: string;
  primary: boolean;
}

export interface EmailList {
  emails: Email[];
}

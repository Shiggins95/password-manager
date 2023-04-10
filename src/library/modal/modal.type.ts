import { ReactNode } from 'react';

export interface ModalProps {
  animationType?: 'fade' | 'slide';
  children: ReactNode | ReactNode[];
  handleClose?: () => void;
}

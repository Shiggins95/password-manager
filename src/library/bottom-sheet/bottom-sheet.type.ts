import { ReactNode } from 'react';

export interface BottomSheetProps {
  size?: number;
  title?: string;
  children: ReactNode;
  handleClose: (value?: string) => void;
}

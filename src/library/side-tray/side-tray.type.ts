import { ReactNode } from 'react';

export interface SideTrayProps {
  children: ReactNode | ReactNode[];
  side: 'right' | 'left';
  handleClose?: () => void;
}

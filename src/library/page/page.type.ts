import React from 'react';

export interface PageProps {
  type?: 'safe' | 'view';
  children: React.ReactNode | React.ReactNode[];
}

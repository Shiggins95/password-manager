export enum HeadlineType {
  Title = 'Title',
  Subtitle = 'Subtitle',
  Heading = 'Heading',
  Subheading = 'Subheading',
}

export type HeadlineStyleKey = 'title' | 'subtitle' | 'heading' | 'subheading';

export interface HeadlineProps {
  type: HeadlineType;
  text: string;
  color?: string;
  noMargin?: boolean;
}

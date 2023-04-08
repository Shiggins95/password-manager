export enum BodyType {
  Normal = 'Normal',
  Bold = 'Bold',
  Small = 'Small',
  BoldSmall = 'BoldSmall',
  Link = 'Link',
  LinkSmall = 'LinkSmall',
}

export interface BodyProps {
  type: BodyType;
  text: string;
  margin?: boolean;
  color?: string;
}

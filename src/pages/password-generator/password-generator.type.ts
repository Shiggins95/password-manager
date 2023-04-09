export interface ToggleRowProps {
  onChange: () => void;
  value: boolean;
  text: string;
  first?: boolean;
  last?: boolean;
}

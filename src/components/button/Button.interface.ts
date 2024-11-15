export interface ButtonProps {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'icon';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  'aria-label'?: string;
}

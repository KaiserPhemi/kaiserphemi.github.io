export interface BlogPost {
  image: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'link';
  className?: string;
  onClick?: () => void;
}

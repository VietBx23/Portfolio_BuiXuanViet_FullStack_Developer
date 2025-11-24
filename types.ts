import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

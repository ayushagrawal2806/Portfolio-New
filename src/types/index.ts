export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  impact: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

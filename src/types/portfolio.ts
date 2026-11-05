export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Desain Web' | 'Desain UI/UX' | 'Branding' | 'Desain Grafis';
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  client?: string;
  year?: string;
  deliverables?: string[];
  tools?: string[];
  tags: string[];
  liveUrl?: string;
  highlights?: string[];
}

export interface ProcessStep {
  step: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  details: string[];
  icon: 'search' | 'lightbulb' | 'pencil' | 'rocket';
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  icon: 'laptop' | 'smartphone' | 'feather' | 'layers' | 'image' | 'compass';
  whatsappMessage: string;
}

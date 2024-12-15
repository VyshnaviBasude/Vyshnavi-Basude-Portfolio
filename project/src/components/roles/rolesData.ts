import { Code2, Layout, Database, Cloud, Cpu, Brain } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Role {
  title: string;
  Icon: LucideIcon;
  description: string;
  image: string;
}

export const rolesData: Role[] = [
  {
    title: 'Software Engineer',
    Icon: Cpu,
    description: 'Building scalable software solutions',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Full Stack Developer',
    Icon: Code2,
    description: 'Building end-to-end web applications',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Frontend Developer',
    Icon: Layout,
    description: 'Creating beautiful user interfaces',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Backend Developer',
    Icon: Database,
    description: 'Developing robust server solutions',
    image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'AI/ML Engineer',
    Icon: Brain,
    description: 'Implementing intelligent solutions',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Salesforce Developer',
    Icon: Cloud,
    description: 'Building Salesforce solutions',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000'
  }
];
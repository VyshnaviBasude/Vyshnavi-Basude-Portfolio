import accenture from '../../assests/accenture.png'
import capgemini from '../../assests/capgemini.png'
import unh from '../../assests/unh.jpeg'
export interface Experience {
  title: string;
  company: string;
  period: string;
  logo: string;
  description: string[];
}

export const experienceData: Experience[] = [
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of New Haven',
    period: 'Jan 2024 - May 2024',
    logo: unh,
    description: [
      'Explained complex AI, Computer Vision, Linux shell scription (Bash), PowerShell scripting, and software development concepts to over 50 students per semester, enhancing their understanding and application of technical solutions by 30%',
      'Assisted students in debugging, troubleshooting and optimizing their code, leading to a 25% reduction in error rates and a 20% improvement in their project completion times.',
      'Explored ways to visualize GitHub collaboration in a classroom setting and maintain technical documentation.'
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Accenture',
    period: 'Jul 2021 - Aug 2022',
    logo: accenture,
    description: [
      'Developed and maintained full-stack web applications using React and Node.js',
      'Implemented RESTful APIs and integrated third-party services',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Capgemini',
    period: 'Jun 2020 -Jul 2021',
    logo: capgemini,
    description: [
      'Assisted in developing frontend components using React and TypeScript',
      'Participated in code reviews and implemented feedback',
      'Gained hands-on experience with agile development methodologies',
    ],
  },
];
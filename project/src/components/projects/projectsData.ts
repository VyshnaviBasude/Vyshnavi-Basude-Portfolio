import superbowlImage from '../../assests/superbowlImage.jpg';
import realEstateImage from '../../assests/realEstateImage.jpg';
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
}

export const projectsData: Project[] = [
  {
    title: 'Real Estate Marketplace',
    description: 'A MERN-Stack Real Estate platform with user authentication, search and sort functionality and CRUD Operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    image: realEstateImage,
    github: 'https://github.com/VyshnaviBasude/mern-estate-project',
    live: 'https://mern-estate-tp1r.onrender.com/',
  },
  {
    title: 'Uber Data Analysis Using Machine Learning',
    description: 'Leveraged data analytics, NLP, and machine learning to enhance Uber operations, achieving 98% accuracy in predicting Uber and Lyft sales improving efficiency.',
    technologies: ['Python', 'TensorFlow', 'NumPy'],
    image: 'https://files.oaiusercontent.com/file-3wFTipS5m3rNDxTPPRS4ss?se=2024-12-14T18%3A09%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd2280b8b-ac21-450f-b725-fd70625a9d2f.webp&sig=78SmuGiDCixJT0GlTQfx%2BnKBh9UupDnaTQ4x/IzlwVk%3D',
    github: 'https://github.com/VyshnaviBasude/Team-TrailBlazers',
    live: '#',
  },
  {
    title: 'Super Bowl Winners',
    description: 'A full-stack SPA with Vue.js, Node.js, and MongoDB featuring dynamic content, user authentication.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'MongoDB'],
    image: superbowlImage,
    github: '"https://github.com/VyshnaviBasude/Super_Bowl_Frontend',
    live: 'https://superbowlwinners.netlify.app/',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    github: '',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    github: '',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data and forecasts for multiple locations.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    github: '',
    live: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing and analyzing social media metrics across platforms.',
    technologies: ['React', 'TypeScript', 'D3.js', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    github: '',
    live: '#',
  },
  {
    title: 'AI Image Generator',
    description: 'An application that generates unique images using artificial intelligence and machine learning.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
    github: '',
    live: '#',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, and video calls.',
    technologies: ['React', 'Socket.io', 'WebRTC', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    github: '',
    live: '#',
  },

  {
    title: 'Object Detection using Deep Learning',
    description: 'Built a deep learning system achieving 95% accuracy in object detection and 92% in localization, enhancing precision in image analysis.',
    technologies: ['Python', 'Numpy', 'Matplotlib'],
    image: 'https://files.oaiusercontent.com/file-Esb2ew2gU5nkfyk8PUtXGu?se=2024-12-14T18%3A11%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db1895d4f-21e4-4b87-9249-bca4d51135a0.webp&sig=KK%2BITKk9U/L19%2BSn3sIy1my9DkbZmWe6MdUscRG27zU%3D',
    github: '',
    live: '#',
  },
  {
    title: 'Azure Migration',
    description: 'Designed an Azure Data Engineering pipeline for secure cloud migration, leveraging Data Factory, Synapse, Databricks, and Power BI for seamless data transformation and visualization.',
    technologies: ['React', 'Socket.io', 'WebRTC', 'Redis'],
    image: 'https://files.oaiusercontent.com/file-3JUUyyfDR4UAXdotn2sfrh?se=2024-12-14T18%3A16%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D61da1d82-a624-40a1-9264-e2252bd454df.webp&sig=tk5HZXSsjUZcZq7jzzp9e10wDWjOnvKGFxfzgwqi0E8%3D',
    github: '',
    live: '#',
  },
  {
    title: 'Building CI/CD Pipeline',
    description: 'Built a CI/CD pipeline with Jenkins, Docker, Maven, SonarQube, and Kubernetes, leveraging Argo CD for automated lifecycle management and seamless Java application deployment.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GIT'],
    image: 'https://files.oaiusercontent.com/file-LHoScyu1oyrnRJ3h9Aotvd?se=2024-12-15T05%3A25%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8862cf8c-595b-40d4-ba18-2087b816d053.webp&sig=yGJdBGT103DNHZrPAZ/LUpBxkHK0wdwoqv35VS1W30g%3D',
    github: '',
    live: '#',
  },
];
import React from 'react';
import { Experience } from './experienceData';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 h-full w-px bg-indigo-200">
        <div className="absolute top-0 left-0 -translate-x-1/2 bg-white p-1.5 rounded-full border-2 border-indigo-200">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white p-2">
            <img 
              src={experience.logo} 
              alt={`${experience.company} logo`}
              className="w-full h-full object-contain"
              style={{ filter: 'contrast(1.2)' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-md ml-6 border border-gray-100 hover:border-indigo-200 transition-colors">
        <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
        <p className="text-indigo-600 font-medium">{experience.company}</p>
        <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
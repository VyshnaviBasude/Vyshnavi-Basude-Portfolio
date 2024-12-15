import React from 'react';
import { Sparkles } from 'lucide-react';
import ExperienceCard from './experience/ExperienceCard';
import { experienceData } from './experience/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            A journey through my professional experience and growth in software development.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
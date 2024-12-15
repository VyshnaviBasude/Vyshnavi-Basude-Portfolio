import React from 'react';
import { BookOpen, Code, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
              alt="Working on laptop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              I am a Full Stack Developer with expertise in building scalable web applications. 
              With a strong foundation in both front-end and back-end development, I create 
              efficient and user-friendly solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <Code className="text-indigo-600 mb-2" size={24} />
                <h3 className="font-semibold">Development</h3>
                <p className="text-sm text-gray-600">Clean and efficient code</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <BookOpen className="text-indigo-600 mb-2" size={24} />
                <h3 className="font-semibold">Learning</h3>
                <p className="text-sm text-gray-600">Continuous improvement</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <Coffee className="text-indigo-600 mb-2" size={24} />
                <h3 className="font-semibold">Dedication</h3>
                <p className="text-sm text-gray-600">Committed to excellence</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-100 hover:border-indigo-300 transition-colors">
                  <h4 className="font-semibold text-indigo-600">Master of Science in Computer Science</h4>
                  <p className="text-gray-600">University of New Haven - (2022-2024)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-100 hover:border-indigo-300 transition-colors">
                  <h4 className="font-semibold text-indigo-600">B.Tech in Electronics and Communication Engineering</h4>
                  <p className="text-gray-600">Gokaraju Rangaraju Institute of Engineering and Technology - (2017 - 2021)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
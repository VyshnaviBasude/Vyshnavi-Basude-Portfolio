import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import myImage from '../assests/myImage.jpeg';
const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Backend Engineer",
  "Software Engineer",
  "AI/ML Engineer"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(40deg,#6366f180,#8b5cf680,#6366f180)] opacity-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Vyshnavi Basude</span>
            </motion.h1>
            
            <div className="h-[40px] md:h-[48px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 text-lg max-w-lg"
            >
              Passionate about creating innovative web solutions and turning complex problems into elegant interfaces.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Me <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
    href="https://drive.google.com/file/d/1PKQD8kabtqYiMyD6TYwc51iuctYHNwHQ/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all hover:shadow-lg hover:-translate-y-0.5 ml-4"
  >
    My Resume
  </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <div className="relative">
              {/* Gradient Blob */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              
              {/* Profile Image */}
              <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 mx-auto border-4 border-white shadow-2xl">
                <img
                  src={myImage}
                  alt="Professional headshot"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';

interface SkillIconProps {
  name: string;
  icon: string;
  color: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 relative">
        {/* Octagon Shape Background */}
        <div 
          className="absolute inset-0 bg-white rounded-lg transform rotate-45 shadow-lg"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            background: `linear-gradient(135deg, ${color}15, ${color}30)`
          }}
        />
        
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain transform transition-transform group-hover:scale-110"
          />
        </div>

        {/* Hover Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}40)`,
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillIcon;
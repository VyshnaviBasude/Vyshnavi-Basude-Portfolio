import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface RoleCardProps {
  title: string;
  Icon: LucideIcon;
  image: string;
  index: number;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, Icon, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[300px] rounded-2xl overflow-hidden group"
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/50 to-indigo-900/90" />
      </div>
      
      <div className="relative h-full p-6 flex flex-col items-center justify-end text-white">
        <Icon 
          size={40} 
          className="mb-3 text-white/90 transition-transform duration-300 group-hover:scale-110" 
        />
        <h3 className="text-xl font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default RoleCard;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import RoleCard from './RoleCard';
import { rolesData } from './rolesData';
import { Sparkles } from 'lucide-react';

const RolesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>Professional Roles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            What I Do
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Specializing in multiple areas of software development, I bring diverse skills and expertise to create comprehensive solutions.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, EffectCards]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="!px-6"
        >
          {rolesData.map((role, index) => (
            <SwiperSlide key={role.title}>
              <RoleCard
                title={role.title}
                Icon={role.Icon}
                image={role.image}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RolesSection;
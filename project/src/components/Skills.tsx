import React from 'react';
import { Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { skillsData } from './skills/skillsData';
import SkillIcon from './skills/SkillIcon';

const Skills = () => {
  // Split skills into two rows
  const firstRow = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const secondRow = skillsData.slice(Math.ceil(skillsData.length / 2));

  return (
    <section id="skills" className="py-20 bg-indigo-50/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            A comprehensive set of technologies and tools I work with to create amazing solutions.
          </p>
        </div>

        <div className="space-y-12">
          {/* First Row */}
          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 9,
                },
              }}
              className="!overflow-visible"
            >
              {firstRow.map((skill) => (
                <SwiperSlide key={skill.name}>
                  <div className="flex flex-col items-center">
                    <SkillIcon
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                    />
                    <p className="text-sm font-medium text-gray-700 text-center mt-2">
                      {skill.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Second Row */}
          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 9,
                },
              }}
              className="!overflow-visible"
            >
              {secondRow.map((skill) => (
                <SwiperSlide key={skill.name}>
                  <div className="flex flex-col items-center">
                    <SkillIcon
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                    />
                    <p className="text-sm font-medium text-gray-700 text-center mt-2">
                      {skill.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
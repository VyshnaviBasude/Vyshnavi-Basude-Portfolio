import React from 'react';
import { Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProjectCard from './ProjectCard';
import { projectsData } from './projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            A showcase of my best work, featuring web applications and software solutions.
          </p>
        </div>

        <div className="relative px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-14"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.title} className="h-full">
                <div className="h-full">
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
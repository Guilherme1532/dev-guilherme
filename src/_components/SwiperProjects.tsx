"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

type Project = {
  images: string[];
  name: string;
};

export default function SwiperProjects({ project }: { project: Project }) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2400, disableOnInteraction: false }}
        slidesPerView={1}
      >
        {project.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${project.name} - Slide ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

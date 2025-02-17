import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function ProjectSwiper({ data }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade]}
        effect="fade"
      >
        {data.map((project) => (
          <SwiperSlide
            key={project.title}
            style={{ backgroundColor: project.color, color: project.txtColor }}
          >
            <div className="flex lg:flex-row flex-col gap-5 h-full">
              {/* Inner Swiper for images */}
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="lg:w-1/2"
              >
                {project.img1.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1} for ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="lg:w-1/2 p-5 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="text-4xl text-left">{project.title}</span>
                  <p>{project.desc}</p>
                </div>

                <div className="flex gap-2 mt-auto pt-5">
                  {project.dw && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                      <a href={project.dw}>Try Live</a>
                    </button>
                  )}
                  {project.src && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                      <a href={project.src}>Source Code</a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
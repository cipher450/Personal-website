import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

export default function projectSwiper({ data }) {
  // add bgcolor for eqch diffrent project
  /*

 <div className="technologies flex gap-3">
                    {project.stack((stack)=>(
                        <img src="/assets/logos/nextjs.png" alt="" width={"64px"} />
                    ))}
                   
                     
                  </div>
  */
  console.log(data);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade]}
        effect="fade"
        className="h-fit "
      >
        {data.map((project) => (
          <SwiperSlide
            key={project.title}
            style={{ backgroundColor: project.color, color: project.txtColor  }}
          >
            <div className="flex lg:flex-row flex-col gap-5 lg:h-fit h-full">
              <img src={project.img1} alt="" className="lg:w-1/2" width={""} />

              <div className="swiper--inner lg:w-1/2 p-5 flex flex-col justify-between gap-10">
                <div className="flex flex-col gap-5">
                  <span className="text-4xl text-left">{project.title}</span>

                  <p>{project.desc}</p>
                </div>

                <div className="flex gap-2">
                  {project.dw && (
                    <button class="bg-blue-500  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                      <a href={project.dw}>Try Live</a>
                    </button>
                  )}
                  {project.src && (
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                      <a href={project.dw}>Source Code</a>
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

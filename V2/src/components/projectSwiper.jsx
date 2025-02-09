import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

export default function projectSwiper({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % data[0].img1.length
      );
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

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
              <img
                id="mainImage"
                src={project.img1[currentImageIndex]}
                alt=""
                className="lg:w-1/2"
                onMouseEnter={stopInterval}
                onMouseLeave={startInterval}
              />{" "}
              <div className="lg:w-1/2 p-5 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  {/* <div className="flex flex-wrap items-center gap-3">
                    {project.stack.map((stack, index) => (
                      <img
                        key={index}
                        src={stack}
                        alt={`Technology ${index + 1}`}
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder-tech-icon.png";
                        }}
                      />
                    ))}
                  </div> */}
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

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
            className="flex  flex-col gap-5 h-full"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
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

            <div className="flex flex-col w-full">
              <div className=" p-5 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="text-4xl ">{project.title}</span>
                  <p>{project.desc}</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Attribute
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Compatibility */}
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Compatibility
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc list-inside">
                          <li>
                            Windows: {project.compatible[0] ? "Yes" : "No"}
                          </li>
                          <li>Linux: {project.compatible[1] ? "Yes" : "No"}</li>
                          <li>MacOS: {project.compatible[2] ? "Yes" : "No"}</li>
                        </ul>
                      </td>
                    </tr>

                    {/* Tech Stack */}
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Tech Stack
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-2">
                        {project.stack.map((logo, index) => (
                          <img
                            key={index}
                            src={logo}
                            alt="Tech Logo"
                            className="w-6 h-6 object-contain" // Ensure images are contained within the specified dimensions
                          />
                        ))}
                      </td>
                    </tr>
                    <tr>
                      {project.dw && project.src ? (
                        <div>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            Actions
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 flex gap-2 mt-auto pt-5">
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
                          </td>
                        </div>
                      ) : (
                        ""
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

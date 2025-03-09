import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import PhotoPreview from "./PhotoPreview"; // Import the PhotoPreview component

export default function ProjectSwiper({ data }) {
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // Track whether the preview is open
  const [isMobile, setIsMobile] = useState(false); // Track if the device is mobile
  const [isClient, setIsClient] = useState(false); // Track if the component is running on the client

  // Function to open the preview
  const openPreview = (image) => {
    setSelectedImage(image);
    setIsPreviewOpen(true);
  };

  // Function to close the preview
  const closePreview = () => {
    setSelectedImage(null);
    setIsPreviewOpen(false);
  };

  // Effect to set isClient to true on mount (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Effect to handle window resize and update isMobile state (client-side only)
  useEffect(() => {
    if (!isClient) return; // Exit if not on the client

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  // Don't render the Swiper until the component is on the client
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade]}
        effect="fade"
        slidesPerView={1}  
        spaceBetween={20} 
      >
        {data.map((project) => (
          <SwiperSlide
            key={project.title}
            style={{ backgroundColor: project.color, color: project.txtColor }}
            className="flex flex-col gap-5 h-full"
          >
           
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}  
              spaceBetween={0}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }}
            >
              {project.img1.map((image, index) => (
                <SwiperSlide key={index} className="flex flex-row">
                  <img
                    src={image}
                    alt={`Slide ${index + 1} for ${project.title}`}
                    className="w-full h-full object-cover cursor-pointer" 
                    onClick={() => openPreview(image)} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>

           
            <div className="flex flex-col w-full">
              <div className="p-5 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span
                    className="text-4xl mb-5"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.title}
                  </span>
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
                            className="w-6 h-6 object-contain"
                          />
                        ))}
                      </td>
                    </tr>

                
                    {project.dw && project.src && (
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          Actions
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 flex gap-2 mt-auto pt-5">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                            <a href={project.dw}>Try Live</a>
                          </button>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                            <a href={project.src}>Source Code</a>
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Render the PhotoPreview component if isPreviewOpen is true */}
      {isPreviewOpen && (
        <PhotoPreview image={selectedImage} onClose={closePreview} />
      )}
    </>
  );
}

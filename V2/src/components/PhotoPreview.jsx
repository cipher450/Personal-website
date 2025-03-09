import React from "react";

const PhotoPreview = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-800 rounded-lg w-5 p-2 hover:bg-gray-200"
        >
        X
        </button>

        {/* Selected Image */}
        <img
          src={image}
          alt="Preview"
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default PhotoPreview;
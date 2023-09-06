import React, { useState } from 'react';

const Gallery = () => {
  // Replace these with your actual image file names from the public/assets folder
  const images = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image9.png',
    'image10.png',
    'image11.png',
    'image12.png',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 py-4 text-center text-white">
        <div className="text-2xl font-bold">bricklabsai</div>
      </nav>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openImage(image)}
            >
              <img
                src={`../src/assets/${image}`}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal to display the selected image */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
          <div className="max-w-xl p-4 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-red-600 hover:text-gray-900"
              onClick={closeImage}
            >
              Close
            </button>
            <img
              src={`../src/assets/${selectedImage}`}
              alt={`Selected Image`}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

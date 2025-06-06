import React from 'react';
import se1 from '../assets/nationalconference (1).jpeg';
import se2 from '../assets/nationalconference (2).jpeg';
import se3 from '../assets/nationalconference (3).jpeg';
import se4 from '../assets/nationalconference (4).jpeg';

const seminarImages = [se1, se2, se3, se4];

const SectionGallery = ({ title, images }) => (
  <div className="mb-12">
    <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8 underline decoration-indigo-400 underline-offset-4">
      {title}
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${title} view ${index + 1}`}
          className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 object-cover w-full h-80"
        />
      ))}
    </div>
  </div>
);

function Library() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <SectionGallery title="Inspiria -National level conference" images={seminarImages} />
    </div>
  );
}

export default Library;

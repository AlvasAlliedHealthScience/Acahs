import React from 'react';

import training1 from '../assets/orientation (1).jpeg';
import training2 from '../assets/orientation (2).jpeg';
import training3 from '../assets/orientation (3).jpeg';

function TrainingOrientation() {
  const items = [
    {
      img: training1,
      //title: "Orientation Program",
      //desc: "An introductory program designed to familiarize new students with campus life, academic policies, and resources.",
    },
    {
      img: training2,
      //title: "Skill Development Workshops",
     // desc: "Workshops focusing on enhancing essential skills such as communication, leadership, and technical expertise.",
    },
    {
      img: training3,
      //title: "Career Counseling",
      //desc: "Personalized sessions guiding students in their career choices, resume building, and interview preparation.",
    },
  ];

  return (
    <section className="min-h-screen py-12 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">
        Training & Orientation
      </h1>
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">{item.title}</h2>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrainingOrientation;

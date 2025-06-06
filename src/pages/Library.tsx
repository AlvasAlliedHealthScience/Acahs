import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import l7 from '../assets/l7.png';
import l8 from '../assets/l8.png';
import l9 from '../assets/l9.png';
import l10 from '../assets/l10.png';

import c1 from '../assets/s1.png';
import c2 from '../assets/s2.png';
import c3 from '../assets/s3.png';

import lib1 from '../assets/lib1 (1).png';
import lib2 from '../assets/lib1 (2).png';
import lib3 from '../assets/lib1 (3).png';
import lib4 from '../assets/lib1 (4).png';

import hos1 from '../assets/hos (1).png';
import hos2 from '../assets/hos (2).png';
import hos3 from '../assets/hos (3).png';
import hos4 from '../assets/hos (4).png';
import hos5 from '../assets/hos (5).png';

const laboratoryimages = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];
const classroomimages = [c1, c2, c3];
const libraryImages = [lib1, lib2, lib3, lib4];
const hostelimages = [hos5, hos2, hos3, hos4, hos1];

const SectionSlider = ({ title, images }) => (
  <div className="mb-12">
    <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8 underline decoration-indigo-400 underline-offset-4">
      {title}
    </h1>
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true, // 🔥 Pauses autoplay once user interacts
      }}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`${title} view ${index + 1}`}
            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 object-cover w-full h-96"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

function Library() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <SectionSlider title="Laboratory" images={laboratoryimages} />
      <SectionSlider title="Classroom" images={classroomimages} />
      <SectionSlider title="Library" images={libraryImages} />
      <SectionSlider title="Hostel" images={hostelimages} />
    </div>
  );
}

export default Library;

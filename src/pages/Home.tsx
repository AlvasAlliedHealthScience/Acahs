import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import slide3 from '../assets/alvas1.jpg';
import slide1 from '../assets/about1.jpg';
import slide2 from '../assets/alvas 2.jpg';
import slide4 from '../assets/alvas3.jpg';
import campus1 from '../assets/about1.jpg';
import popupImage from '../assets/popup.jpeg'; // Add your popup image here
import seminar from '../assets/6.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [slide2, slide3, slide4];



function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans">

      {/* 🔔 POPUP MODAL */}
      {showPopup && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
  <div className="bg-white rounded-2xl p-4 w-full max-w-3xl max-h-[90vh] h-[90vh] shadow-2xl relative overflow-hidden">
    <button
      onClick={() => setShowPopup(false)}
      className="absolute top-2 right-4 text-gray-700 hover:text-red-500 text-3xl font-bold z-10"
    >
      &times;
    </button>

    <a href="/courses" className="block w-full h-full">
      <img
        src={popupImage}
        alt="Popup"
        className="rounded-lg w-full h-full object-contain"
      />
    </a>
  </div>
</div>


      )}

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Welcome to Alva's Allied Health Science
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6">
              "MOULDING A BETTER TOMORROW"
            </p>
            <button
              onClick={() => navigate('/courses')}
              className="inline-block px-8 py-3 text-lg font-semibold bg-blue-400 hover:bg-blue-500 text-yellow-900 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 py-6 shadow-lg">
        <div className="relative z-10 flex justify-between items-center animate-marquee whitespace-nowrap text-blue-900 text-lg md:text-xl font-semibold px-6">
          <div>
            🎉 Admissions Open for 2025! | Enroll now and shape your legal career at Alva’s Allied Health Science! | Limited seats available — Apply Today!
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src={slide3}
              alt="Top Law College in Mangalore | Alvas Law College"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
            />
          </div>
          <div className="lg:w-1/2 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-600 mb-6">
              About Us
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              <span className="font-medium text-blue-900">Alva’s College of Allied Health Science</span> Allied Health Science professionals play a crutial role and are the support pillars of the health care system. Allied Health profession include individuals involved with the delivery of health related service with expertise contributing in the therapeutic, diagnostic, curative preventive and rehabilitative interventions. Currently India faces acute shortage of Allied Health Science professionals, the UG and PG programme we offer under Rajiv Gandhi University of Health Sciences are of ample placement opportunities and greater carrier prospectus both in India and abroad as well, for students.
            </p>
            {/* <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              The college is affiliated with Karnataka State Law University (KSLU), recognized by the Government of Karnataka, and approved by the Bar Council of India (BCI), New Delhi.
            </p> */}
            <button
              className="mt-8 inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => navigate('/about')}
            >
              Read More...
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 mb-12 tracking-tight font-poppins">
          Our Courses & Programs
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {[
            {
              title: 'UG Courses',
              desc: 'Combines commerce and law to prepare students for dynamic legal careers.',
              note: null,
            },
            {
              title: 'PG Courses',
              desc: 'Postgraduate specialization to develop legal expertise and analytical thinking.',
              note: null,
            },
           
          ].map(({ title, desc, note }) => (
            <div
              key={title}
              role="button"
              tabIndex={0}
              onClick={() => navigate('/courses')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('/courses');
              }}
              className="group w-[300px] h-auto min-h-[340px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 cursor-pointer p-8 text-left border border-blue-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-800 to-blue-700 text-transparent bg-clip-text transition-all duration-300 group-hover:underline decoration-2 underline-offset-4">
                  {title}
                </h3>
                {note && (
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md font-semibold">
                    {note}
                  </span>
                )}
              </div>
              <p className="text-gray-800 text-base leading-relaxed tracking-wide transition-all duration-300 group-hover:text-blue-900">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
{/* Why Choose Us Section */}
<section className="py-20 px-6 md:px-20 bg-white text-center">
  <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 mb-12">
    Why Choose Us?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {[
      {
        icon: '🎓',
        title: 'Experienced Faculty',
        desc: 'Learn from qualified professors and practitioners with years of clinical and academic experience.',
        buttonText: 'View Faculty',
        route: '/faculty'
      },
      {
        icon: '🏥',
        title: 'Practical Training',
        desc: 'Hands-on learning through partnerships with hospitals and diagnostic centers.',
        buttonText: 'View Training Program',
        route: '/training'
      },
      {
        icon: '🌐',
        title: 'Global Opportunities',
        desc: 'Programs aligned with international standards and career prospects abroad.',
        buttonText: 'Explore Careers',
        route: '/internships'
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
      >
        <div className="text-5xl mb-4">{item.icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-800">{item.title}</h3>
        <p className="text-gray-700 mb-4">{item.desc}</p>
        <button
          onClick={() => navigate(item.route)}
          className="mt-auto px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition"
        >
          {item.buttonText}
        </button>
      </div>
    ))}
  </div>
</section>


{/* Campus Life Section */}
<section className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-50 to-blue-100">
  <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-800 mb-16 text-center">
    Vibrant Campus Life
  </h2>

  <div className="space-y-20">
    {[
      {
        title: 'Clubs & Activities',
        desc: 'Clubs and activities provide students with opportunities to explore their interests beyond academics. They encourage teamwork, leadership, and personal growth. From cultural to technical clubs, students can engage in a wide range of enriching experiences',
        image: slide1,
        link: '/event'
      },
      {
        title: 'Events & Seminars',
        desc: 'Events and seminars offer platforms for students to gain insights from experts and showcase their talents. They foster learning beyond the classroom through interactive and real-world experiences. Such programs enhance knowledge, confidence, and professional exposure.',
        image: seminar,
        link: '/seminar'
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex flex-col lg:flex-row gap-12 items-center bg-white/80 backdrop-blur-md p-6 lg:p-10 rounded-2xl shadow-xl transition-all duration-500"
      >
        <div className="lg:w-1/2">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-96 object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            {item.desc}
          </p>
          <a
            href={item.link}
            className="inline-block px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    ))}
  </div>
</section>





{/* Partner Hospitals / Internship Section */}
{/* <section className="py-20 px-6 md:px-20 bg-white text-center">
  <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 mb-12">
    Internship & Clinical Exposure
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
    <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-blue-900 mb-2">Partner Hospitals</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Alva's Health Centre</li>
        <li>District Government Hospitals</li>
        <li>Private Multi-Specialty Hospitals</li>
      </ul>
    </div>
    <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-blue-900 mb-2">Internship Opportunities</h3>
      <p className="text-gray-700">
        Students undergo supervised internships in diagnostic labs, operation theatres, and hospital management settings as part of the curriculum.
      </p>
    </div>
  </div>
</section> */}


      {/* Testimonials */}
      
    </div>
  );
}

export default Home;

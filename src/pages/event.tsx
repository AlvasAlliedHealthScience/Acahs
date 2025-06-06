import React from 'react';

import theater from '../assets/about1.jpg';
import vaibhavaImg from '../assets/about2.avif';
import nudisiriImg from '../assets/about3.jpg';
import performingArtsImg from '../assets/about4.jpg';
import adoptionImg from '../assets/law.jpeg';
import kannadaSchoolImg from '../assets/about6.avif';
import integrationImg from '../assets/about7.jpg';
import patriotismImg from '../assets/about8.jpg';
import pragathiImg from '../assets/about9.jpg';
import sportsImg from '../assets/about10.jpg';
import republic from '../assets/e1.jpg';
import christmas from '../assets/e12.jpg';
import kereyalam from '../assets/e16.jpg';
import graduation from '../assets/e29.jpg';
import event from '../assets/e32.jpg';
import deptevent from '../assets/e42.jpg';

function About() {
  const sections = [
    {
      img: theater,
      title: "Alva’s Theater Study Center",
      desc:
        "The center is dedicated to the study and research of the theater field. It aims at training students in theater art and enables them to find a career in the film industry.",
    },
    {
      img: vaibhavaImg,
      title: "Alva’s Samskrithika Vaibhava",
      desc:
        "A three-hour cultural performance by student artistes. This troupe performs over 100 stages annually and provides free education through the Adoption Scheme.",
    },
    {
      img: nudisiriImg,
      title: "Alva’s Nudisiri & Virasat",
      desc:
        "Nudisiri is a national Kannada literary festival; Virasat celebrates Indian heritage, attracting lakhs of visitors annually.",
    },
    {
      img: performingArtsImg,
      title: "Performing Arts Center",
      desc:
        "Offers training in dance forms from Manipur, Odisha, and Sri Lanka, promoting cultural exchange and performance art.",
    },
    {
      img: adoptionImg,
      title: "Adoption Scheme",
      desc:
        "Provides free education to students from tribal and financially challenged backgrounds in academics, culture, and sports.",
    },
    {
      img: kannadaSchoolImg,
      title: "Kannada Medium School",
      desc:
        "A rural initiative under the Adoption Scheme that offers free, quality education in Kannada to deserving students.",
    },
    {
      img: integrationImg,
      title: "Integration Festivals",
      desc:
        "Celebrations like Diwali, Christmas, Iftar, and more promote cultural unity among diverse students.",
    },
    {
      img: patriotismImg,
      title: "Patriotism",
      desc:
        "Grand celebrations of Independence Day and Republic Day promote national pride and patriotism.",
    },
    {
      img: pragathiImg,
      title: "Alva’s Pragathi",
      desc:
        "A national-level job fair connecting 300+ companies with thousands of job seekers from Alva’s and across India.",
    },
    {
      img: sportsImg,
      title: "Alva’s Sports",
      desc:
        "Through Ekalavya Academy, Alva’s trains Olympians and champions with free facilities under the Adoption Scheme.",
    },
    {
      img: republic,
      title: "Republic Day",
      desc: "Celebrated with patriotic spirit, speeches, cultural performances, and flag hoisting.",
    },
   
    {
      img: christmas,
      title: "Christmas",
      desc: "A celebration of joy, community, and sharing with carols, performances, and decorations across the campus.",
    },
    {
      img: kereyalam,
      title: "Keraleeyam",
      desc: "Festival celebrating Kerala's culture and traditions with music, dance, and cuisine.",
    },
    
    {
      img: graduation,
      title: "Graduation Day",
      desc: "Marks the culmination of academic achievement with degree distribution and celebration with families.",
    },
    {
      img: event,
      title: "College Events",
      desc: "Includes various inter-college competitions, celebrations, talent shows and orientation programs.",
    },
    {
      img: deptevent,
      title: "Department Events",
      desc: "Academic and cultural events conducted by individual departments to encourage student participation and learning.",
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 md:px-12">
      {sections.map((item, index) => (
        <div
          key={index}
          className={`max-w-6xl mx-auto mt-12 flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center gap-8`}
        >
          {item.img && (
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-1/2 h-64 rounded-xl shadow-md object-cover transition-transform duration-500 hover:scale-105"
            />
          )}
          <div className={`${item.img ? 'md:w-1/2' : 'w-full'} text-gray-700 text-justify leading-relaxed text-lg`}>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;

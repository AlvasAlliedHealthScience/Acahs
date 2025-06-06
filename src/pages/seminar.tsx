import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

function Courses() {
  const allCourses = [
    {
      icon: GraduationCap,
      title: 'National level Conference',
      link: '/national',
    },
    {
      icon: GraduationCap,
      title: 'State level Conference',
      link: '/state',
    },
    {
      icon: GraduationCap,
      title: 'Blood camp',
      link: '/bloodcamp',
    },
  ];

  const renderCourses = (courses) =>
    courses.map((course, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-100 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center gap-4 mb-4">
            <course.icon className="w-10 h-10 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-800">{course.title}</h2>
          </div>
          <p className="text-gray-700 mb-6">{course.description}</p>
        </div>
        <Link
          to={course.link}
          className="mt-auto inline-flex text-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300"
        >
          Click
        </Link>
      </div>
    ));

  return (
    <div className="px-6 py-12 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Events & Conferences
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {renderCourses(allCourses)}
      </div>
    </div>
  );
}

export default Courses;

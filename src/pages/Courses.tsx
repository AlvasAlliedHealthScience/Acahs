import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

function Courses() {
  const ugCourses = [
    {
      icon: GraduationCap,
      title: 'Bachelor in Public Health',
      description: 'Bachelor of Public Health (BPH) is a 4-year undergraduate degree (8 semesters) preparing candidates with comprehensive knowledge in various aspects of public health...(Click know more)',
      link: '/bph',
    },
    {
      icon: BookOpen,
      title: 'BSc in Medical Imaging Technology',
      description: 'B.Sc Medical Imaging Technology is a 4-year undergraduate programme including a one-year internship. It prepares students with skills in modern imaging technologies...(Click know more)',
      link: '/bscmit',
    },
    {
      icon: BookOpen,
      title: 'BSc in Medical Laboratory Technology',
      description: 'B.Sc Medical Laboratory Technology is a 4-year undergraduate programme with a one-year internship. It offers practical and theoretical knowledge in laboratory diagnostics...(Click know more)',
      link: '/bscmlt',
    },
    {
      icon: BookOpen,
      title: 'BSc in Renal Dialysis Technology',
      description: 'This 4-year undergraduate programme, including a one-year internship, trains students in dialysis techniques, preparing them as skilled paramedical professionals...(Click know more)',
      link: '/bscrdt',
    },
    {
      icon: BookOpen,
      title: 'Bachelor in OT and Anesthesia Technology',
      description: 'B.Sc in Operation Theatre & Anesthesia Technology is a 4-year undergraduate programme including a one-year internship. It provides deep insights into surgical and anesthesia procedures...(Click know more)',
      link: '/bot',
    },
    {
      icon: BookOpen,
      title: 'Bachelor in Hospital Administration',
      description: 'BHA is a 3-year full-time intensive programme that includes classroom lectures and hands-on training in various hospital departments and healthcare organizations...(Click know more)',
      link: '/bha',
    },
  ];

  const pgCourses = [
    {
      icon: GraduationCap,
      title: 'Masters in Clinical Psychology',
      description: 'The MSc in Clinical Psychology integrates science, theory, and clinical knowledge for diagnosing and treating psychological disorders...(Click know more)',
      link: '/mic',
    },
    {
      icon: BookOpen,
      title: 'Masters in Hospital Administration',
      description: 'The MHA programme is practical and industry-oriented, designed to prepare students for managerial roles in healthcare organizations...(Click know more)',
      link: '/mha',
    },
  ];

  const mltCourses = [
    {
      icon: GraduationCap,
      title: 'MSc MLT Microbiology and Immunology',
      description: 'This course is designed to create expertise in laboratory diagnosis of Human diseases caused by bacteria, viruses, fungi & parasites as well as antimicrobial Su...(Click know more)',
      link: '/mscmltmi',
    },
    {
      icon: BookOpen,
      title: 'MSc MLT Haematology and Blood Transfusion',
      description: 'This course is designed to provide in depth knowledge & impart skills to the prospective students to analyse the patient samples, diagnosing & reporting the var...(Click know more)',
      link: '/mscmlthb',
    },
    {
      icon: BookOpen,
      title: 'MSc MLT Clinical Biochemistry',
      description: 'Clinical Biochemistry is the division of laboratory medicine that deals with the measurement of chemicals in blood urine and other body fluids. The results are ...(Click know more)',
      link: '/mscmltcb',
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
          className="mt-auto inline-flex  text-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300"
        >
          Apply now
        </Link>
      </div>
    ));

  return (
    <div className="px-6 py-12 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      {/* UG Courses */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 mb-16 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">UG Programmes</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Bachelor of Science in Allied Health Science
        </h2>
        <div className="grid md:grid-cols-2 gap-10">{renderCourses(ugCourses)}</div>
      </div>

      {/* PG Courses */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 mb-16 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">PG Programmes</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Masters of Science in Allied Health Science
        </h2>
        <div className="grid md:grid-cols-2 gap-10">{renderCourses(pgCourses)}</div>
      </div>

      {/* MSc. MLT Courses */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Courses Offered by MSc. MLT</h2>
        <p className="text-center max-w-4xl mx-auto mb-10 text-gray-700">
          M.Sc in Medical Laboratory Technology is a two-year postgraduate programme aimed at students aspiring to be Medical Laboratory Scientists. It covers
          Microbiology, Biochemistry, Toxicology, Immunology, Blood Banking, Research, and more.
        </p>
        <div className="grid md:grid-cols-2 gap-10">{renderCourses(mltCourses)}</div>
      </div>
    </div>
  );
}

export default Courses;

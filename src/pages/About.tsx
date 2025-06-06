import React from 'react';
import coll from '../assets/alvas 2.jpg'
import coll1 from '../assets/alvas3.jpg'


function About() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-12">
      <div className="my-6 flex justify-center">
  <img
    src={coll} // Or replace with lawCollegeImg if you have it
    alt="Alva’s Law College Campus"
    className="w-full md:w-2/3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
  />
</div>
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">About Us</h1>

      <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed space-y-6 text-justify text-lg">
        <p>
          Dr. M Mohan Alva set up an Ayurvedic clinic in Moodubidire in 1980 to cater to the basic health needs of the people of his village, primarily addressing issues like snake bites. In 1982, he established Alva’s Pharmacy to produce essential medicines. Responding to evolving needs, the clinic was upgraded into a full-fledged multi-specialty hospital—Alva’s Health Center—in 1986. After addressing local healthcare needs, Dr. Alva focused on societal upliftment by creating job opportunities for rural youth through paramedical courses. This led to the birth of Alva’s Education Foundation (AEF) in 1995, beginning with institutes for Nursing and Physiotherapy, and followed by Nursing and Ayurvedic Medical Colleges in 1996. In 1998, he established Alva’s P.U. and Degree Colleges to introduce innovative changes in education, integrating national-level exam coaching with NCERT curriculum and fostering the Ekalavya Sports Club. Recognizing the importance of holistic development, Dr. Alva emphasized a 24-hour campus life through hostel systems and coaching for competitive exams such as CET, NEET, JEE, NDA, CLAT, IAS, and more. Alva’s pioneered educational strategies including bridge courses, crash courses, vacation coaching, and NEET long-term training, yielding exceptional student outcomes—over 300 students qualify for medical education annually.
        </p>
        <p>
          In 2024, Alva’s system was further refined by organizing students into 12 Blocks across Science, Commerce, Arts, and NEET divisions to ensure individual attention. Alva’s Degree College promotes “Degree with Purpose,” offering vocational training, civil services coaching, business skills, and higher education pathways. It consistently ranks among the top, securing 30–40 ranks under Mangalore University each year. The Foundation is acclaimed for producing postgraduates under Mangalore University, engineers under VTU, and healthcare professionals under RGUHS. The aesthetically enriched campus—with sculptures, art, gardens, and cultural events—nurtures students’ creative and literary talents. Through initiatives like the Dheemkita Yakshagana Study Center, which teaches Thenku Thittu and Badagu Thittu Yakshagana and provides certification, students develop cultural awareness and artistic skills while building strong, healthy minds and bright futures.
        </p>
      </div>

         {/* Alva’s Law College Section */}
         <div className="max-w-6xl mx-auto mt-16 bg-white/80    transition-all duration-500">
         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center mt-16">
  Alva’s Allied Health Science
</h2>
{/* 👇 Inserted Image */}
<div className="my-6 flex justify-center">
  <img
    src={coll1} // Or replace with lawCollegeImg if you have it
    alt="Alva’s College of Allied Health Science"
    className="w-full md:w-2/3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
  />
</div>
<p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-4 max-w-6xl mx-auto">
  Allied Health Science professionals play a crutial role and are the support pillars of the health care system. Allied Health profession include individuals involved with the delivery of health related service with expertise contributing in the therapeutic, diagnostic, curative preventive and rehabilitative interventions. Currently India faces acute shortage of Allied Health Science professionals, the UG and PG programme we offer under Rajiv Gandhi University of Health Sciences are of ample placement opportunities and greater carrier prospectus both in India and abroad as well, for students. ACAHS is committed to provide high quality educational experience that will prepare qualified, humble and motivated individuals for a better tomorrow.
</p>

</div>

<h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Unique Features</h1>

      <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed space-y-6 text-justify text-lg">
        <h3>Vibrant Campus.</h3>
        <h3>Activity Based Learning.</h3>
        <h3>Highly qualified and competent teaching staff with rich healthcare and academic experience.</h3>
        <h3>State of art infrastructure.</h3>
        <h3>Continuous curriculum on Personality development, communication skill and soft skills.</h3>
        <h3>Practical training in state of laboratories and hospitals.</h3>
        <h3>100% placement assistance.</h3>
        <h3>Hostel and transportation Facility. Separate hostel facilities for boys and girls with a multi- cusine mess.</h3>
        
      </div>

    

     

      
    </div>
  );
}

export default About;

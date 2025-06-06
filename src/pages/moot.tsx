import React from "react";
import prof1 from '../assets/prof.png';
import poster from '../assets/poster.png'; // <-- Make sure this poster image exists
import alu1 from '../assets/alu1.jpg'
import alu2 from '../assets/alu2.jpg'
import alu3 from '../assets/alu3 (1).jpg'
import alu4 from '../assets/alu3 (2).jpg'
import nidhi from '../assets/NIDHI.jpeg'
import muskan from '../assets/MUSKAN.jpeg'
import aslam from '../assets/ASLAM.jpeg'
import aship from '../assets/ASHIP.jpeg'
import faris from '../assets/FARIS.jpeg'
import nafi from '../assets/NAFI.jpeg'
import noel from '../assets/noel.jpeg'
import sparsha from '../assets/sparsha.jpeg'
import yashaswi from '../assets/yashaswi.jpeg'
import shuhas from '../assets/fac (1).jpeg'
import sumodh from '../assets/fac (2).jpeg'
import kashi from '../assets/fac3.jpg'
const facultyMembers = [
  // Rank Holders
  {
    name: "Pratheeksha",
    qualification: "10th rank",
    image: prof1,
    role: "Professor",
    department: "Rank Holders",
  },
  {
    name: "Danie Joseph",
    qualification: "2nd rank",
    image: prof1,
    role: "Bachelor in Hospital Administration (2020)",
    department: "Rank Holders",
  },
  {
    name: "Jude Jeevan correa",
    qualification: "5th rank",
    image: prof1,
    role: "Bachelor in Hospital Administration (2020)",
    department: "Rank Holders",
  },
  {
    name: "Nidhi",
    qualification: "5th rank",
    image: prof1,
    role: "Bachelor in Hospital Administration (2020)",
    department: "Rank Holders",
  },
  {
    name: "Pallavi shettigar",
    qualification: "9th rank",
    image: prof1,
    role: "Bsc MLT(2020)",
    department: "Rank Holders",
  },
  {
    name: "Ms.ivy ceotinha",
    qualification: "10th rank",
    image: prof1,
    role: "BSc MLT(2020)",
    department: "Rank Holders",
  },
  {
    name: "Ms. Sreya M K",
    qualification: "9th rank",
    image: prof1,
    role: "BSc MLT(2020)",
    department: "Rank Holders",
  },
  {
    name: "Mr.Rakshith",
    qualification: "Represented in RGUHS",
    image: prof1,
    role: "Men's volleyball team",
    department: "Rank Holders",
  },
  {
    name: "Ms. Nikitha B",
    qualification: "7th rank",
    image: prof1,
    role: "BSc MLT",
    department: "Rank Holders",
  },
  {
    name: "Ms. Deepa D Shetty",
    qualification: "7th rank",
    image: prof1,
    role: "BSc MLT",
    department: "Rank Holders",
  },
  {
    name: "Mr. Mallikarjun Jadhav",
    qualification: "9th rank",
    image: prof1,
    role: "BSc MLT",
    department: "Rank Holders",
  },
  {
    name: "Ms.Shruthi Krishna Moolya",
    qualification: "6th rank",
    image: prof1,
    role: "BSc MLT",
    department: "Rank Holders",
  },

  // Placements
  {
    name: "Suhas K T",
    qualification: "Principal",
    image: shuhas,
    role: "Mims College of allied health sciences, Aster MIMS academy, Malappuram, Kerala",
    department: "Placements",
  },
  {
    name: "Sumod P George",
    qualification: "Medical Scientist",
    image: sumodh,
    role: "Health Service Executive Republic of Ireland.",
    department: "Placements",
  },
  {
    name: "Kashinath K",
    qualification: "(B. Sc MLT)  proprietor ",
    image: kashi,
    role: "Nadoli Diagnostic Center and X ray center.The complete house of Diagnosis. Kadaba",
    department: "Placements",
  },
  {
    name: "Noel Cherian",
    qualification: "B.Sc MLT",
    image: noel,
    role: "York NHS Hospital,UK Biomedical Scientists",
    department: "Placements",
  },
  {
    name: "Sparsha",
    qualification: "BHA",
    image: sparsha,
    role: "Delloite Heydrabad",
    department: "Placements",
  },
  {
    name: "Yashaswi",
    qualification: "BHA",
    image: yashaswi,
    role: "Delloite Heydrabad",
    department: "Placements",
  },
  {
    name: "Fathima Muskan",
    //qualification: "working as a Psychologist (Behaviour Therapist) at Learn to Rise Child Development Centre, Bangalore",
    image: muskan,
    role: "working as a Psychologist (Behaviour Therapist) at Learn to Rise Child Development Centre, Bangalore",
    department: "Placements",
  },
  {
    name: "Salmanul faris",
    qualification: "Managing director (Bsc.MLT) ",
    image: faris,
    role: "MEDHUB MEDICAL ASSOCIATES, PERINGOME , KANNUR,KERALA",
    department: "Placements",
  },
  {
    name: "Mohammad Ashif",
    qualification: "Managing director (Bsc.MLT) ",
    image: aship,
    role: "LABOMED MEDICAL LABORATORY , PADIYOTTUCHAL,KANNUR ,KERALA",
    department: "Placements",
  },
  {
    name: "Muhammed Aslam",
    qualification: "Medical laboratory technologist ",
    image: aslam,
    role: "Ministry of Health Sabah Hospital Kuwait Histopathology department",
    department: "Placements",
  },
{
    name: "MUHAMMAD NAFI ",
    qualification: "LABORATORY TECHNOLOGIST",
    image: nafi,
    role: "Nova health care ,Doha Qatar",
    department: "Placements",
  },
  {
    name: "Nidhi .B(MHA)",
    qualification: "Lecturer  ",
    image: nidhi,
    role: "Alvas College of Allied Health sciences",
    department: "Placements",
  },

  {
    name: "Mr Gopalakrishna Kini",
    qualification: "Application Specialist",
    image: prof1,
    role: "Gulf Corporation of Technology,UAE",
    department: "Placements",
  },
  {
    name: "Ms.Ramya G S",
    qualification: "Lab in charge and Quality Manager",
    image: prof1,
    role: "AI Ahalia Hospital,UAE",
    department: "Placements",
  },
  {
    name: "Mr.Vidhurang",
    qualification: "Northwell health ,North Shore Long Island,Jewish Hospital",
    image: prof1,
    role: "(LIJ)Laboratories,New York,USA ",
    department: "Placements",
  },
  {
    name: "Mr. W Anuradha L Fernando",
    qualification: "Director",
    image: prof1,
    role: "Suhada Medical Laboratory Jayamadi Pvt.Ltd,Srilanka",
    department: "Placements",
  },
];

function Faculty() {
  const departments = ["Rank Holders", "Placements"];

  return (
    <div className="container mx-auto p-6">
      {/* Poster at the top */}
      
      <img
        src={poster}
        alt="Alumni Poster"
        className="w-full rounded-xl mb-6 shadow-lg object-cover max-h-[1600px]"
      />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      
  <img
    src={alu1}
    alt="Alumni Poster 1"
    className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
  />
  <img
    src={alu2}
    alt="Alumni Poster 2"
    className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
  />
  <img
    src={alu3}
    alt="Alumni Poster 3"
    className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
  />
  <img
    src={alu4}
    alt="Alumni Poster 4"
    className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
  />
</div>


      {departments.map((dept) => (
        <div
          key={dept}
          className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-2xl font-semibold mb-4">{dept}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers
              .filter((member) => member.department === dept)
              .map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold">{faculty.name}</h3>
                  <p className="text-gray-600">{faculty.qualification}</p>
                  <p className="text-sm text-gray-500">{faculty.role}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faculty;

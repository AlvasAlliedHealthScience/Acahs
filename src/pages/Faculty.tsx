import React from "react";

import prof1 from '../assets/prof.png';
import harish from '../assets/Dr. Shankar Shetty.jpeg'
import mamatha from '../assets/Dr.Mamatha Guruprasad.jpeg'
import swarna from '../assets/Dr.Swarna Rekha.jpeg'
import alwin from '../assets/Mr. Alwin J. Lewis.jpeg'
import srivanthi from '../assets/Mrs. Srivanitha T.Y.jpeg'
import anusha from '../assets/Mrs.Anusha Shetty.jpeg'
import swomya from '../assets/Ms.Sowmya Shenoy.jpeg'
import kavya from '../assets/Ms.Kavya  U.jpeg'
import nidhi from '../assets/Ms.Nidi.jpeg'
import swathi from '../assets/swathii.jpeg'
import krishna from '../assets/Ms.Krishna  S  Nair.jpeg'
import bushra from '../assets/Ms. Bushra.jpeg'
import sunitha from '../assets/Ms.Sunitha.jpeg'
import shivani from '../assets/Ms.Shivani.jpeg'
import naziya from '../assets/Ms.Naaziya.jpeg'
import gayatri from '../assets/Mrs.Gayathri Shenoy.jpeg'
import vinay from '../assets/vinayalva.jpeg'
import hana from '../assets/Screenshot 2025-06-02 110718.png'
import adarsh from '../assets/Screenshot 2025-06-02 110808.png'
import shrutha from '../assets/Screenshot 2025-06-02 110756.png'
import muzamil from '../assets/Screenshot 2025-06-02 110831.png'
import fac1 from '../assets/fac1.jpeg'
const facultyMembers = [
  // Medical Laboratory Technology
  {
    name: "Dr. Shankar Shetty",
    qualification: "M.Sc (Medical ) Ph. D., DHN",
    image: harish,
    role: "Principal &HOD ",
    department: "Hospital Administration",
  },
  {
    name: "Dr.Vinaya Alva ",
    qualification: "MBBS M.S",
    image: vinay,
    role: "Professor",
    department: "Hospital Administration",
  },
  {
    name: "Dr.Hana Shetty ",
    qualification: "MBBS MD, Gyne and OBS ",
    image: hana,
    role: "Professor",
    department: "Hospital Administration",
  },
  {
    name: "Dr. Mamatha G",
    qualification: "MBBS,D. Anesthesia",
    image: mamatha,
    role: "Professor",
    department: "Hospital Administration",
  },
  {
    name: "Dr. Shrutha Shetty",
    qualification: "MBBS",
    image: shrutha,
    role: "Professor",
    department: "Hospital Administration",
  },
  {
    name: "Dr.Swarna Rekha",
    qualification: "MBBS, MD  Anesthesia",
    image: swarna,
    role: "Professor",
    department: "Hospital Administration",
  },
  {
    name: "Mr. Alwin Joseph Lewis",
    qualification: "M.Sc (Medical Microbiology)",
    image: alwin,
    role: "Professor",
    department: "Hospital Administration",
  },

  // OT & AT
  {
    name: "Mrs.Srivanitha T.Y",
    qualification: "M.Sc (Medical Microbiology)",
    image: srivanthi,
    role: "Professor",
    department: "Hospital Administration",
  },
  {
    name: "Mr.Adarsh Hegde",
    qualification: "MHA",
    image: adarsh,
    role: "Professor&HOD",
    department: "Hospital Administration",
  },
  {
    name: "Mr.Muzzamil Ahamed",
    qualification: "M.Sc Psychology ",
    image: muzamil,
    role: "Asst.Professor",
    department: "Hospital Administration",
  },
  {
    name: "Mrs.Anusha Shetty ",
    qualification: "MBA",
    image: anusha,
    role: "Assoc.Professor",
    department: "Hospital Administration",
  },
  {
    name: "Ms.Sowmya Shenoy",
    qualification: "M.Com ",
    image: swomya,
    role: "Asst.Professor",
    department: "Hospital Administration",
  },

  // Clinical Psychology
  {
    name: "Ms.Kavya  U",
    qualification: "M.Sc Psychology",
    image: kavya,
    role: "Asst.Professor",
    department: "Hospital Administration",
  },
  {
    name: "Ms.Nidhi",
    qualification: "MHA",
    image: nidhi,
    role: "Lecturer",
    department: "Hospital Administration",
  },

  // Hospital Administration
  {
    name: "Ms.Swathi",
    qualification: "M.Sc MLT (Clinical Biochemistry]",
    image: swathi,
    role: "Lecturer",
    department: "Hospital Administration",
  },
  {
    name: "Ms.Krishna  S  Nair",
    qualification: "M.Sc MLT (Hematology and Blood  Transfusion ]",
    image: krishna,
    role: "Lecturer",
    department: "Hospital Administration",
  },
  {
    name: "Ms. Bushra",
    qualification: "M.Sc MLT (Microbiology and Immunology ]",
    image: bushra,
    role: "Lecturer",
    department: "Hospital Administration",
  },
  {
    name: "Ms.Sunitha",
    qualification: "B.Sc AT & OT ",
    image: sunitha,
    role: "Tutor ",
    department: "Hospital Administration",
  },
  {
    name: "Ms.Shivani",
    qualification: "B.Sc MLT",
    image: shivani,
    role: "Tutor",
    department: "Hospital Administration",
  },
  {
    name: "Ms.Naziya",
    qualification: "B.Sc MLT ",
    image: naziya,
    role: "Tutor",
    department: "Hospital Administration",
  },
  {
    name: "Mrs.Gayathri Shenoy",
    qualification: "M.A English ",
    image: gayatri,
    role: "Lecturer",
    department: "Hospital Administration",
  },
  {
    name: "Mr. Avinash s",
    qualification: "B.PEd &M.PEd",
    image: fac1,
    role: "Physical education director",
    department: "Hospital Administration",
  },
];

function Faculty() {
  const departments = [
    
    "Hospital Administration",
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Faculty</h1>

      {departments.map((dept) => (
        <div key={dept} className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-6">
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

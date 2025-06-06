// Internships.tsx
import React from "react";

const internshipCenters = [
  "K S Hegde, Nitte",
  "Baliga Hospital, Udupi",
  "Viveka Hospital, Mysore",
  "Anuvrinda Foundation, Mangalore",
  "Spandana Hospital, Mangalore",
  "Mijar De-addiction Centre",
  "Alvas Ayurveda Medical College",
  "Alvas Homeopathy Medical College",
  "Alvas Health Centre",
];

const Internships: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10 sm:px-10 lg:px-20">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Internship Centres</h1>
      <ul className="space-y-4">
        {internshipCenters.map((center, index) => (
          <li
            key={index}
            className="p-4 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {center}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Internships;

import React from 'react';
import logo from '../assets/lgoo.png';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-br from-black via-gray-800 to-red-900 text-white">
      
     {/* Top Contact Strip */}
{/* Top Contact Strip */}
<div className="w-full bg-white-950 text-lg px-4 py-2 flex flex-col md:flex-row justify-between items-center">
  <div className="flex gap-6 flex-wrap justify-center md:justify-start text-white">
    <span>📞 8317357019</span>
    
    <span>📞 9481974422</span>
    <span>📞 8147760379</span>
     
  </div>
  <div className="flex gap-4 flex-wrap justify-center md:justify-end mt-4 md:mt-0 text-white">
    <span>
      ✉️ <a href="mailto:achas@alvas.org" className="hover:text-blue-300">achas@alvas.org</a>
    </span>
    
  </div>
</div>


      {/* Main Header Section */}
      <div className="max-w-[2000px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="https://alvas.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="Alvas Law College Logo"
              className="h-28 w-28 md:h-32 md:w-32 transition-all duration-300"
            />
          </a>
        </div>

        {/* College Name & Affiliations 
        Recognized by Government of Karnataka
Affiliated to Rajiv Gandhi University of Health Sciences
Bangalore
*/}
        <div className="text-center font-serif">
          <h1 className="text-4xl font-bold mb-2">Alva's College Of Allied Health Sciences</h1>
          <p className="text-lg">Recognized by Government of Karnataka</p>
          <p className="text-lg">Affiliated to Rajiv Gandhi University of Health Sciences Bangalore</p>
          {/* <p className="text-sm mt-1">Smt. Sundari Ananda Alva Campus, Vidyagiri, Moodbidre, 574227</p> */}
        </div>

      </div>
    </header>
  );
};

export default Header;

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import logo from '../assets/logo.png';

const Footer = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_70vu7wm',     // Replace with your EmailJS service ID
        'template_tg1dp9o',    // Replace with your EmailJS template ID
        e.currentTarget,
        'WM6GL1d89T5c3_hyt'         // Replace with your EmailJS public key
      )
    .then(() => {
      setSent(true);
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Email sending error:', error.text);
    });
  };

  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <img src={logo} alt="Alva’s Allied Health Science" className="w-32 mb-4" />
          <p className="text-sm text-gray-300">
            Alva’s College of Allied Health Science is a premier institution offering quality education in health science under the esteemed Alva’s Education Foundation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/courses" className="hover:underline">Courses</Link></li>
            <li><Link to="/event" className="hover:underline">Activities</Link></li>
            <li><Link to="/research" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white pb-1">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-2">Alva’s College of Allied Health Science</p>
          <p className="text-sm text-gray-300 mb-2">Moodbidri, Karnataka, India</p>
          <p className="text-sm text-gray-300 mb-2">Email: achas@alvas.org</p>
          <p className="text-sm text-gray-300 mb-4">Phone: +91-8147760379</p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 text-white text-xl">
            <a href="https://www.instagram.com/alvas_allied?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/p/192azxJ8Gd/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white pb-1">Contact Form</h3>
          <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 gap-4 text-black">
            <input type="text" name="name" placeholder="Your Name" required className="p-2 rounded-md" />
            <input type="tel" name="phone" placeholder="Phone Number" required className="p-2 rounded-md" />
            <input type="email" name="email" placeholder="Email ID" required className="p-2 rounded-md" />
            <select name="course" required className="p-2 rounded-md">
              <option value="">-- Select Interested Course --</option>
              <option value="Bachelor of Science in Allied Health Science">
                Bachelor in Public Health
              </option>
              <option value="Masters of Science in Allied Health Science">
                BSc in Medical Imaging Technology
              </option>
              <option value="MSc. MLT">BSc in Medical Laboratory Technology</option>
              <option value="MSc. MLT">BSc in Renal Dialysis Technology</option>
             <option value="MSc. MLT"> Bachelor in OT and Anesthesia Technology</option>
              <option value="MSc. MLT">Bachelor in Hospital Administration</option>
              <option value="MSc. MLT">Masters in Clinical Psychology</option>
              <option value="MSc. MLT">Masters in Hospital Administration</option>
              <option value="MSc. MLT">MSc MLT Microbiology and Immunology</option>
              <option value="MSc. MLT">MSc MLT Haematology and Blood Transfusion</option>
              <option value="MSc. MLT">MSc MLT Clinical Biochemistry</option>
            </select>
            <button type="submit" className="bg-yellow-400 text-blue-900 font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 transition-all">
              Submit
            </button>
            {sent && <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>}
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Alva’s College of Allied Health Science. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

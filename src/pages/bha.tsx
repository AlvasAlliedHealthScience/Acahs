import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const BHA = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_70vu7wm',         // ✅ Your EmailJS service ID
      'template_tg1dp9o',        // ✅ Your EmailJS template ID
      formRef.current,
      'WM6GL1d89T5c3_hyt'        // ✅ Your EmailJS public key
    )
    .then(() => {
      alert('Enrollment submitted successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      alert('Error submitting the form. Please try again.');
      console.error(error);
    });
  };
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto space-y-10">
      {/* About Section */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About Department</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          BHA is a 3-year intensive full-time programme, which includes classroom lectures and practical training 
          in various departments of a hospital or healthcare organization.
        </p>
      </section>

      {/* Eligibility Section */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Eligibility Criteria</h2>
        <p className="text-gray-700 text-lg leading-relaxed italic">
          Eligibility details will be updated soon...
        </p>
      </section>

      {/* Job Opportunities */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Job Opportunities</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>100% Job Placement as Administrators or Assistant Administrators in corporate/public hospitals</li>
          <li>Administrative Managers in Public Relations, HRM, Marketing, Operations & Quality Control</li>
          <li>Independent Hospital Consultant</li>
          <li>Opportunities abroad: UK, US, Canada, Australia, UAE etc.</li>
          <li>Careers in Hospital Health Information Systems, Insurance Industry, Medical Tourism</li>
          <li>Roles in National Healthcare Programs, WHO, R&D and Teaching Fields</li>
        </ul>
      </section>

      {/* Department Events */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Department Events</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>College Day</li>
          <li>College Day</li>
          <li>College Day</li>
          <li>College Day</li>
          <li>Department Event</li>
          <li>Department Event</li>
          <li>Department Event</li>
          <li>Department Event</li>
          <li>Department Event</li>
          <li>Department Event</li>
        </ul>
      </section> */}

      {/* Rank Holders */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Department Rank Holders</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li><strong>Nidhi</strong> – 5th Rank</li>
          <li><strong>Jude Jeevan Correa</strong> – 5th Rank</li>
          <li><strong>Danie Joseph</strong> – 2nd Rank</li>
        </ul>
      </section>

      {/* Enroll Form */}
      <section className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Enroll Now</h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" name="email" placeholder="you@example.com" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input type="tel" name="phone" placeholder="Your Phone Number" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Course</label>
            <input type="text" name="course" value="Bachelor of Public Health (BPH)" readOnly className="w-full p-2 border bg-gray-200 rounded" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default BHA;

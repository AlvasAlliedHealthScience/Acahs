import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const BPH = () => {
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
          The MHA programme is highly practical-oriented, catering to the needs of various specialized fields of healthcare,
          which is different from general management programmes. The students go through a rigorous and continuous evaluation system,
          which demands a high degree of commitment in terms of regularity, punctuality, and teamwork.
        </p>
      </section>

      {/* Eligibility Section */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Eligibility Criteria</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Passed in PUC (any stream) with a minimum of 40% marks.
        </p>
      </section>

      {/* Job Opportunities */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Job Opportunities</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>100% Job Placement as Administrators or Assistant Administrators in corporate/public hospitals</li>
          <li>Administrative Managers of various departments: Public Relations, HRM, Marketing, Operations & Quality Control</li>
          <li>Independent hospital consultant opportunities</li>
          <li>Opportunities abroad: UK, US, Canada, Australia, UAE</li>
          <li>Roles in Hospital Health Information Systems, Insurance, Medical Tourism, National Healthcare Programs</li>
          <li>Research and teaching roles in WHO and other international organizations</li>
        </ul>
      </section>

      {/* Department Events */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Department Events</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>College Day</li>
          <li>Department Events</li>
        </ul>
      </section> */}

      {/* Rank Holders */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Department Rank Holders</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>
            <strong>Pratheeksha</strong> – 10th Rank
          </li>
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

export default BPH;

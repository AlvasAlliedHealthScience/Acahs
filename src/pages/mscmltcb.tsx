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
          Clinical Biochemistry is the division of laboratory medicine that deals with the measurement of chemicals in blood, urine, and other body fluids. 
          The results are useful for detecting health problems, determining prognosis, and guiding the therapy of patients.
        </p>
      </section>

      {/* Eligibility Section */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Eligibility Criteria</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Candidates must have passed a B.Sc MLT degree from a recognized University with not less than 50% marks in aggregate.
          <br />
          All foreign nationals should have equivalent educational qualifications approved by the Board of All India Universities, New Delhi.
          <br />
          An eligibility certificate from the REGISTRAR, Rajiv Gandhi University of Health Sciences, Bangalore, must be submitted by non-Karnataka and foreign nationals candidates prior to enrolment.
        </p>
      </section>

      {/* Job Opportunities */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Job Opportunities</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg space-y-1">
          <li>Clinical Laboratory Technologists</li>
          <li>Clinical Laboratory Scientists</li>
          <li>Application Specialists in MNCs</li>
          <li>Teaching Faculty in Universities in India & abroad</li>
          <li>Health Safety Officer</li>
          <li>Entrepreneur</li>
          <li>Quality Control Officer</li>
          <li>Epidemiological Survey</li>
          <li>Research etc.</li>
        </ul>
      </section>

      {/* Rank Holders */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Department Rank Holders</h2>
        <p className="text-gray-500 italic text-lg">No data available yet.</p>
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

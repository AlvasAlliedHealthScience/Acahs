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
          It is a 4 years undergraduate programme including one year internship, which prepares students to become trained dialysis technologists who provide strong paramedical support to hospitals for providing specialized care to renal failure patients. 
          Dialysis technologists work closely with nephrologists and carry out regular dialysis and various preparatory procedures including sterilization and maintenance of machines for patients of chronic renal failure awaiting renal transplant haemodialysis.
        </p>
      </section>

      {/* Eligibility Section */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Eligibility Criteria</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Passed in PUC / PDC / HSC (10+2) including VHSE KERALA with Renal Dialysis Technology with a minimum of 40% marks in Physics, Chemistry & Biology.
          <br />
          <strong>Lateral Entry:</strong> Diploma of Para Medical Board (Govt. of Karnataka) for lateral entry to 2nd year.
        </p>
      </section>

      {/* Job Opportunities */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Job Opportunities</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>Dialysis Technologist</li>
          <li>Clinical Coordinator</li>
          <li>Lecturer/Tutor</li>
          <li>Medical Technologist</li>
          <li>Higher education options – Medical, Preclinical/Paraclinical (Anatomy, Physiology, Biochemistry, Microbiology, Pathology, Pharmacology subjects etc.)</li>
        </ul>
      </section>

      {/* Rank Holders */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Department Rank Holders</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li><strong>Pratheeksha</strong> – 10th Rank</li>
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

// src/pages/Contact.tsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_70vu7wm',     // Replace with your EmailJS service ID
        'template_0tu8p0b',    // Replace with your EmailJS template ID
        e.currentTarget,
        'WM6GL1d89T5c3_hyt'         // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setFeedback('✅ Message sent successfully!');
          e.currentTarget.reset();
        },
        (error) => {
          console.error('Error:', error.text);
          setFeedback('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-700">
            <h1 className="text-3xl font-bold text-indigo-800 mb-4">
             Alva's College Of Allied Health Sciences
            </h1>
            <p className="mb-4">
              Recognized by Government of Karnataka
              <br />
              Affiliated to Rajiv Gandhi University of Health Sciences

            </p>
            <p className="mb-4">Bangalore</p>
            {/* <p className="mb-4">
              <span className="font-semibold">Smt. Sundari Ananda Alva</span>
              <br />
              Vidyagiri, Moodbidre, 574227
            </p> */}
            <p className="mb-4">
              <span className="font-semibold">College Office:</span>8147760379
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email:</span>{' '}
              acahs@alvas.org
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">
              Get in Touch
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition duration-300"
              >
                Send Message
              </button>
              {feedback && (
                <p className="mt-4 text-green-600 font-semibold">{feedback}</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">
            Find Us Here
          </h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4801006382118!2d74.98753857985481!3d13.068730754395146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4ab03c0ea3403%3A0x375de5fb842d8ac8!2sAlva&#39;s%20College%20of%20Hospital%20Administration!5e0!3m2!1sen!2sin!4v1748855298792!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alva's College Of Allied Health Sciences Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

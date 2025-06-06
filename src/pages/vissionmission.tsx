// src/pages/Messages.tsx
import React from 'react';


import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const aboutlaw: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-20 px-4 md:px-20 bg-white-50">
        <motion.div
          className="container mx-auto flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Vission and Mission</h2>
          <div className="max-w-4xl text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
          <h3 className="text-lg font-semibold">Vision:</h3>
          <ul className="list-disc pl-6 mt-2">
            <p>Alva’s Education Foundation ®aims at imparting
            quality education to equip the young generation
            with all those skill and competence needed to cope
            with the fast changing phase of modern life
           Emphasis is always on high ethos, quality, integrity,
             humane approaches and social commitments.</p>
          </ul>
          <h3 className="text-lg font-semibold mt-4">Mission:</h3>
          <ul className="list-disc pl-6 mt-2">
            <p>At Alva’s Education Foundation, our mission is to empower students
               through holistic and quality education that nurtures academic excellence, 
              ethical values, and a commitment to societal progress. 
              We strive to foster a vibrant learning environment
               supported by dedicated faculty, advanced infrastructure, and opportunities for research, innovation, sports, arts, and cultural development. 
               Our aim is to shape responsible global citizens who embody the principle of “A Sound Mind in a Sound Body.”</p>
          </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default aboutlaw;
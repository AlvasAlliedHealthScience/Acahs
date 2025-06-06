// src/pages/Messages.tsx
import React from 'react';
import { motion } from 'framer-motion';
import harish from '../assets/Dr. Shankar Shetty.jpeg'
import chaiman from '../assets/chairman.webp'
import prof1 from '../assets/prof.png';
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Messages: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Chairman's Message */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <motion.div
          className="container mx-auto flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Chairman's Message</h2>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl transition-transform hover:scale-105 duration-500">
            <img 
              src={chaiman} 
              alt="Chairman" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-blue-900 text-lg">Dr. MOHAN ALVA, Chairman</p>
          <div className="max-w-4xl text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
            <p>Alva’s Education Foundation ® was conceived and founded by
            Dr.Mohan Alva, a physician by profession and philanthropist by heart.
            Alva’s Education Foundation is a dream realized by Dr.Mohan Alva to
            impart quality education. Dr.Mohan Alva’s vision, dynamism, foresight,
            simplicity, goodwill, righteousness and his conviction that education
            lies at the root of all social progress are the guiding forces behind
            establishing the Foundation which came in to being in 1995 with a few
            Institution in various disciplines, making a long awaited social
            transformation a reality . Alva’s Education Foundation is synonymous
            with discipline, knowledge, punctuality, humility and the like.</p>
          </div>
        </motion.div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 px-4 md:px-20 bg-white-50">
        <motion.div
          className="container mx-auto flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Principal's Message</h2>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl transition-transform hover:scale-105 duration-500">
            <img 
              src={harish} 
              alt="Principal" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-blue-900 text-lg">Dr. Shankar Shetty, Principal</p>
          <div className="max-w-4xl text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
            <p>“A desire can change no things, a decision can change something but a 
            determination can change everything”. It is my pleasure to welcome you to Alva’s 
            College of Allied Health Sciences website. An Institution under prestigious Alva’s
            Education Foundation Moodubidre, Karnataka, has set a Motto of “Moulding better
            tomorrow”. Alva’s College of Medical Laboratory Technology is an Institution that 
            strives for all over development of our students. We are constantly reviving our 
            setup up to date and improve while making sure that student gains thinking skills, 
            analytical framework, entrepreneurial skills inter personal and communication skills. 
            Hope you will find all the required information that you are seeking for from our 
           college website. You are always welcome to pay a visit to our college or contact us
            for any other information that you require. </p>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Messages;

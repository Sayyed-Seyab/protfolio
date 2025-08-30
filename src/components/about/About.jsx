import React from 'react';
import Full_Stack from '../../assets/Full_Stack.png';
import { FaLocationDot } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="  font-sans pt-20 "
    >
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-20 text-white p-6  rounded-2xl 
             w-full  mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl  ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-gray-400 to-green-500 bg-clip-text text-transparent">
            Sayed Seyab
          </h2>

          {/* Riyadh Iqama with animation */}
          <motion.div 
            className="flex gap-2 items-center mb-2 text-white font-bold text-lg"
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaLocationDot className='text-green-500 text-3xl' />
            <span>Riyadh | Transferable Iqama</span>
          </motion.div>

          {/* Typewriter Effect for description */}
          <p className="text-1xl  text-gray-200 mb-8 leading-relaxed">
            I am a{' '}
            <span className="text-green-400 font-semibold w-20 ">
              <Typewriter
                words={['Full Stack Web Developer', 'Frontend Web Developer', 'Backend Web Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </span>{' '}
            <br />
            experienced designing and deploying scalable <span className='font-semibold'>full-stack applications,
 Dashboards </span>  and <span className='font-semibold'>Desktop applications</span> . Skilled in <span className='font-semibold'>JavaScript, React.js, Node.js, Electron.js, SQLite, Firebase and MongoDB </span>.
 Proven success in building high-performance <span className='font-semibold'>REST APIs, secure authentication system</span>s, and <span className='font-semibold'>real-time POS & booking
 platforms</span>.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/17EzwvANu-ZtPGOus18Mwebmt0ocRHcPm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-10 lg:text-sm lg:px-5 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-110 hover:shadow-purple-500/50"
            style={{
              background: 'linear-gradient(50deg, #16a86a, #22c59e)',
            }}
          >
            🚀 Download CV
          </a>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <motion.img
              src={Full_Stack}
              alt="Sayed Seyab"
              className="w-full h-full rounded-full object-cover border-4 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.7)]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

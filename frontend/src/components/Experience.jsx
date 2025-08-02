import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Default experience data
    const defaultExperiences = [
      {
        _id: '1',
        company: 'MyPhysioFriend',
        position: 'Full Stack Developer Intern',
        duration: 'September 2024 - November 2024',
        location: 'Delhi, India',
        type: 'Internship',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap'],
        description: [
          'Developed a comprehensive appointment booking system for physiotherapy clinics with patient and doctor management.',
          'Built an admin panel for managing doctors - including listing, registration, and removal functionalities.',
          'Implemented secure authentication system for patients, doctors, and administrators using JWT tokens.',
          'Created responsive UI components for appointment scheduling, doctor profiles, and patient dashboards.',
          'Integrated real-time appointment notifications and status updates for enhanced user experience.'
        ]
      },
      {
        _id: '2',
        company: 'BSES Yamuna Power Limited',
        position: 'Frontend Developer Intern',
        duration: 'July 2024 - August 2024',
        location: 'Delhi, India',
        type: 'Internship',
        technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
        description: [
          'Worked as a frontend developer intern on the company\'s internal website, contributing to layout and component development using ReactJS.',
          'Built responsive and reusable UI components that improved website structure and mobile compatibility.',
          'Enhanced user experience by implementing clean and accessible design practices using HTML, CSS, and JavaScript.'
        ]
      }
    ];

    // In a real app, this would fetch from API
    setExperiences(defaultExperiences);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-dark-200">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            My professional journey and hands-on experience in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-0.5 md:w-1 bg-primary-500 h-full"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp._id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary-500 rounded-full border-2 md:border-4 border-dark-200 z-10"></div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-300 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaBriefcase className="text-primary-400" />
                        <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      
                      <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            • {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FaCode className="text-primary-400" />
                        <span className="text-sm font-medium text-gray-400">Technologies Used:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Education
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-dark-300 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaBriefcase className="text-primary-400" />
                <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">
                  2022 - 2026
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2">
                B.Tech in Information Technology
              </h4>
              
              <p className="text-gray-300 mb-2">
                Bhagwan Parshuram Institute of Technology (GGSIPU)
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span>CGPA: 7.5/10.0</span>
                <span>Delhi, India</span>
              </div>
              
              <p className="text-gray-300 text-sm">
                Focused on software development, data structures, algorithms, and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-dark-300 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaBriefcase className="text-primary-400" />
                <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">
                  2022
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2">
                Senior Secondary School (12th)
              </h4>
              
              <p className="text-gray-300 mb-2">
                DAV Centenary Public School (CBSE)
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span>Grade: 77%</span>
                <span>Delhi, India</span>
              </div>
              
              <p className="text-gray-300 text-sm">
                Completed with focus on Mathematics, Physics, and Chemistry.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-dark-300 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaBriefcase className="text-primary-400" />
                <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">
                  2020
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2">
                Secondary School (10th)
              </h4>
              
              <p className="text-gray-300 mb-2">
                DAV Centenary Public School (CBSE)
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span>Grade: 85%</span>
                <span>Delhi, India</span>
              </div>
              
              <p className="text-gray-300 text-sm">
                Strong foundation in Mathematics, Science, and English with excellent academic performance.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Experience;

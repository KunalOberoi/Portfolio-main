import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-dark-200">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Learn more about my journey, education, and passion for technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 px-4 lg:px-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
             I'm a final-year B.Tech Information Technology student at Bhagwan Parshuram Institute of Technology (GGSIPU), currently maintaining a 7.5 CGPA. My journey into tech began with a simple curiosity about how websites work — which quickly evolved into a deep passion for full-stack web development, problem-solving, and creating user-centric digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
             During my internship at BSES Yamuna Power Limited, I worked as a Frontend Developer, where I helped redesign the company's internal website using ReactJS, HTML, CSS, and JavaScript, focusing on building responsive UI components that improved user experience and performance.
            </p>
            <p className="text-gray-300 leading-relaxed">
             I later joined MyPhysioFriend as a Full Stack Developer, where I built a full-stack appointment booking system with admin panel features for doctor management. I used ReactJS for the frontend, and Node.js, Express.js, and MongoDB for the backend, implementing JWT-based authentication, RESTful APIs, and clean, maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed">
            Beyond internships, I’ve been working on personal and collaborative projects that integrate AI into web applications using OpenAI APIs, and I'm actively learning how to apply machine learning concepts in real-world products. I'm also sharpening my understanding of data structures, algorithms, and system design to build scalable and efficient software.
            </p>
            <p className="text-gray-300 leading-relaxed">
            My goal is to contribute to innovative tech teams as a Full Stack Developer who can not only build robust systems but also bring intelligence into them through AI-powered features.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 px-4 lg:px-0">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="bg-dark-300 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300">
                <FaGraduationCap className="text-primary-400 text-2xl sm:text-3xl mb-3 sm:mb-4" />
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Education</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">B.Tech IT from BPIT (GGSIPU)</p>
                    <p className="text-xs">CGPA: 7.5/10.0 (2022-2026)</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Class 12th (CBSE)</p>
                    <p className="text-xs">DAV Centenary Public School - 77% (2022)</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Class 10th (CBSE)</p>
                    <p className="text-xs">DAV Centenary Public School - 73% (2020)</p>
                  </div>
                </div>
              </div>
              

              <div className="bg-dark-300 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300">
                <FaCode className="text-primary-400 text-2xl sm:text-3xl mb-3 sm:mb-4" />
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Focus</h4>
                <p className="text-gray-400 text-sm">
                  <li>Full Stack Web Development (MERN Stack)</li>
                  
                  <li>Problem Solving & System Design Fundamentals</li>
                  
                  <li>Continuous Learning: DSA, Machine Learning Basics, and DevOps</li>
                  <li>Backend API Design and Integration</li>


                </p>
              </div>

              <div className="bg-dark-300 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors duration-300">
                <FaLaptopCode className="text-primary-400 text-2xl sm:text-3xl mb-3 sm:mb-4" />
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Experience</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">MyPhysioFriend - Full Stack Developer</p>
                    <p className="text-gray-400 text-xs">
                      Developed a full-stack appointment booking system with admin panel
                      <br />
                     <li> Built using ReactJS (frontend) and Node.js/ExpressJS (backend)</li>
                     <li> Integrated MongoDB, JWT Authentication, and role-based access control</li>
                     <li> Deployed the application on Vercel with version control via GitHub</li>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">BSES Yamuna Power Limited - Frontend Developer</p>
                    <p className="text-gray-400 text-xs">
                      Contributed to improving UI of company’s internal portal
                      <br />
                       <li> Used ReactJS, HTML, CSS, JavaScript to build responsive UI components</li>
                     <li> Enhanced user experience through improved layout and responsiveness</li>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 p-6 rounded-lg border border-primary-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">What I'm Currently Learning</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Practicing problem-solving on platforms like LeetCode and HackerRank to strengthen DSA skills</li>
                <li>• Exploring AI integration in web apps using APIs like OpenAI, TensorFlow.js, and Hugging Face</li>
                <li>• Learning basic machine learning concepts (supervised vs. unsupervised learning, model deployment)</li>
                <li>• Studying system design principles to better architect real-world applications</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

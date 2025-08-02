// line 89 resume download link
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaCode } from 'react-icons/fa';

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-dark-300 flex items-center justify-center">
                <FaCode className="text-3xl sm:text-4xl md:text-6xl text-primary-400" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4"
        >
          Hi, I'm{' '}
          <span className="text-gradient">
            Kunal Oberoi
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 px-4"
        >
          Full Stack Developer & IT Student
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Passionate about creating innovative web solutions using the MERN stack. 
          Currently pursuing B.Tech in Information Technology with hands-on experience 
          in frontend development and modern web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Get In Touch
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/file/d/1AWX5kZ8kt_94wc93CVzbhER2O7e6FT4J/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="https://github.com/KunalOberoi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <FaGithub size={28} className="sm:w-8 sm:h-8" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/kunaloberoi-16072004k/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} className="sm:w-8 sm:h-8" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

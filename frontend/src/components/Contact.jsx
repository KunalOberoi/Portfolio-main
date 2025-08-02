import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'kunaloberoi2010@gmail.com',
      link: 'mailto:kunaloberoi2010@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 7838203606',
      link: 'tel:+917838203606'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Delhi, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kunaloberoi-16072004k/',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/KunalOberoi',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-dark-200">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-dark-300 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <info.icon className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-base sm:text-lg"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-base sm:text-lg">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Description Section */}
        <motion.div variants={itemVariants} className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 p-6 sm:p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              I'm passionate about creating innovative solutions and always excited to collaborate on interesting projects. 
              Whether you're looking for a developer to join your team, need help with a specific project, or just want to 
              discuss the latest in web development, I'd love to connect with you.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="mailto:kunaloberoi2010@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Email Me
              </motion.a>
              <motion.a
                href="tel:+917838203606"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary-500 text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Me
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-white mb-6">
            Connect With Me
          </h4>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 bg-dark-300 rounded-full flex items-center justify-center border border-gray-700 ${social.color} transition-all duration-300 hover:border-primary-500`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Default projects data
    const defaultProjects = [
      {
        _id: '1',
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and dynamic content management.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
        githubUrl: 'https://github.com/KunalOberoi',
        liveUrl: 'https://portfolio-main-two-roan.vercel.app/',
        image: '',
        featured: true,
        status: 'Completed'
      },
      {
        _id: '2',
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/KunalOberoi',
        liveUrl: 'https://forever-rho-eight.vercel.app/',
        image: '',
        featured: true,
        status: 'Completed'
      },
      {
        _id: '3',
        title: 'My Physio Friend',
        description: 'My Physio Friend is a full-stack physiotherapy web app built using the MERN stack. It features secure doctor/admin login, doctor listing/delisting, and a complete appointment booking system, all within a responsive and user-friendly interface.',
        technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/KunalOberoi',
        liveUrl: 'https://my-physio-friend.vercel.app/',
        image: '',
        featured: true,
        status: 'Completed'
      },
      {
        _id: '3',
        title: 'Hilos Shopping Website',
        description: 'Hilos is a modern clothing store built using HTML, CSS, and JavaScript, featuring a sleek, responsive design with interactive product displays and a dynamic shopping cart. It offers a smooth user experience with clean layouts and seamless navigation across devices.',
        technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/KunalOberoi',
        liveUrl: 'https://hilos-theta.vercel.app/',
        image: '',
        featured: true,
        status: 'Completed'
      }
    ];

    // In a real app, this would fetch from API
    setProjects(defaultProjects);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : filter === 'Featured' 
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.status === filter);

  const filters = ['All', 'Featured', 'Completed', 'In Progress'];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-dark-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {filters.map((filterItem) => (
            <button
              key={filterItem}
              onClick={() => setFilter(filterItem)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base ${
                filter === filterItem
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-200 text-gray-400 hover:text-white hover:bg-dark-100'
              }`}
            >
              {filterItem}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-dark-200 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-colors duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-40 sm:h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center relative">
                {project.featured && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <FaStar />
                    Featured
                  </div>
                )}
                <FaCode className="text-4xl sm:text-6xl text-primary-400/50" />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-12"
          >
            <FaCode className="text-6xl text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              No projects found for the selected filter.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            <FaGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

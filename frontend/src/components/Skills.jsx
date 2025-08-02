import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaGithub, FaDatabase, FaJava 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVercel, SiMysql 
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Default skills data
    const defaultSkills = [
      {
        category: 'Programming Languages',
        items: [
          { name: 'JavaScript', icon: FaJs, level: 85 },
          { name: 'Java', icon: FaJava, level: 80 }
        ]
      },
      {
        category: 'Frameworks',
        items: [
          { name: 'ReactJS', icon: FaReact, level: 90 },
          { name: 'NodeJS', icon: FaNodeJs, level: 75 },
          { name: 'ExpressJS', icon: SiExpress, level: 70 }
        ]
      },
      {
        category: 'Web Technologies',
        items: [
          { name: 'HTML', icon: FaHtml5, level: 95 },
          { name: 'CSS', icon: FaCss3Alt, level: 90 },
          { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 }
        ]
      },
      {
        category: 'Databases',
        items: [
          { name: 'MongoDB', icon: SiMongodb, level: 75 },
          { name: 'MySQL', icon: SiMysql, level: 70 },
          { name: 'SQL', icon: FaDatabase, level: 70 }
        ]
      },
      {
        category: 'Tools',
        items: [
          { name: 'Git', icon: FaGitAlt, level: 80 },
          { name: 'GitHub', icon: FaGithub, level: 85 },
          { name: 'Postman', icon: SiPostman, level: 75 },
          { name: 'Vercel', icon: SiVercel, level: 70 }
        ]
      },
      {
        category: 'Concepts & Methodologies',
        items: [
          { name: 'OOP', icon: FaDatabase, level: 85 },
          { name: 'Data Structures', icon: FaDatabase, level: 80 },
          { name: 'Algorithms', icon: FaDatabase, level: 75 }
        ]
      }
    ];

    // In a real app, this would fetch from API
    setSkills(defaultSkills);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-dark-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with and continuously learning to improve
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-dark-200 p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-primary-400 text-xl" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

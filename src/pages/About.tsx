import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Briefcase, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';

const About: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    { name: 'React.js', progress: 95, color: 'blue' },
    { name: 'TypeScript', progress: 90, color: 'blue' },
    { name: 'Tailwind CSS', progress: 95, color: 'green' },
    { name: 'Node.js', progress: 85, color: 'green' },
    { name: 'Firebase', progress: 88, color: 'purple' },
    { name: 'Supabase', progress: 92, color: 'purple' }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t('about.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-blue-400" size={24} />
                <h2 className="text-2xl font-semibold text-white">Bio</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('about.bio')}
              </p>
            </div>

            <div className="bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Star className="text-purple-400" size={24} />
                <h2 className="text-2xl font-semibold text-white">Experience</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('about.experience')}
              </p>
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div 
            className="bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 dark:border-gray-700/50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Code className="text-green-400" size={24} />
              <h2 className="text-2xl font-semibold text-white">
                {t('about.technologies')}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {(t('about.techList', { returnObjects: true }) as string[]).map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-lg p-4 border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-green-400 transition-colors duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Progress */}
        <motion.div 
          className="mt-16 bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 dark:border-gray-700/50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Core Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <ProgressBar
                  progress={skill.progress}
                  label={skill.name}
                  color={skill.color as any}
                  height={8}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 
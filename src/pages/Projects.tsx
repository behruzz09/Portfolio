import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Eye, Github, Star, Award, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Edu Pearl',
      description: 'Zamonaviy va interaktiv taʼlim platformasi: testlar, kurslar va oson boshqaruv. O‘quvchilar va o‘qituvchilar uchun qulay interfeys, tezkor natijalar va zamonaviy dizayn.',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://edu-pearl.vercel.app/',
      githubUrl: '',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'Educational Platform',
      rating: 5,
      client: 'Edu Pearl Team',
      duration: '7 kun'
    },
    {
      title: 'Mini Studio',
      description: 'A modern web application for creative professionals to showcase their work and connect with clients. Features include portfolio management, client communication, and project tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      liveUrl: 'https://mini-studio-virid.vercel.app/',
      githubUrl: 'https://github.com/yourusername/mini-studio',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      category: 'Portfolio Platform',
      rating: 5,
      client: 'Creative Agency',
      duration: '5 kun'
    },
    {
      title: 'Vocal Pixie',
      description: 'A voice-controlled music application that allows users to control music playback using voice commands. Features include voice recognition, playlist management, and audio visualization.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://vocal-pixie-e956b2.netlify.app/',
      githubUrl: 'https://github.com/yourusername/vocal-pixie',
      techStack: ['React', 'Web Speech API', 'CSS3', 'Netlify'],
      category: 'Voice Control App',
      rating: 5,
      client: 'Music Startup',
      duration: '6 kun'
    }
  ];

  const categories = ['all', 'Portfolio Platform', 'Educational Platform', 'Voice Control App'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { icon: Users, number: '50+', label: 'Muvaffaqiyatli Loyihalar', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Award, number: '100%', label: 'Mijoz Mamnuniyati', gradient: 'from-purple-500 to-pink-500' },
    { icon: Clock, number: '24/7', label: 'Qo\'llab-quvvatlash', gradient: 'from-green-500 to-emerald-500' },
    { icon: Star, number: '5.0', label: 'O\'rtacha Reyting', gradient: 'from-orange-500 to-red-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins gradient-text mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-inter">
            {t('projects.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 card-hover"
              variants={itemVariants}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4 shadow-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl lg:text-3xl font-bold font-poppins gradient-text mb-2">
                {stat.number}
        </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-inter">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 text-gray-700 dark:text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'Barcha Loyihalar' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
                className="group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 card-hover relative"
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                  animate={{ 
                    x: ['-100%', '100%'],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <div className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative z-10`}>
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-video relative">
                      <motion.img
                    src={project.image}
                    alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                  />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Category Badge */}
                    <motion.div 
                      className="absolute top-6 left-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {project.category}
                  </span>
                    </motion.div>

                    {/* Rating */}
                    <motion.div 
                      className="absolute top-6 right-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="flex space-x-1">
                        {renderStars(project.rating)}
                </div>
                    </motion.div>
              </div>

              {/* Project Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Title */}
                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold font-poppins text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                    {project.title}
                      </motion.h3>

                  {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-inter">
                    {project.description}
                  </p>

                      {/* Project Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div 
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Mijoz</div>
                          <div className="text-gray-900 dark:text-white font-semibold font-poppins">{project.client}</div>
                        </motion.div>
                        <motion.div 
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Davomiyligi</div>
                          <div className="text-gray-900 dark:text-white font-semibold font-poppins">{project.duration}</div>
                        </motion.div>
                      </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                        <h4 className="text-gray-900 dark:text-white font-semibold font-poppins">Texnologiyalar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                            <motion.span
                          key={techIndex}
                              className="bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20 hover:border-blue-400/50 transition-colors duration-300"
                              whileHover={{ scale: 1.1, y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                            </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="group/btn flex items-center space-x-2 button-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={18} />
                      <span>{t('projects.viewLive')}</span>
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center space-x-2 button-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} />
                            <span>Kod</span>
                            <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </motion.a>
                        )}
                  </div>
                </div>
              </div>
            </div>
              </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white mb-4">
              O'z Loyihangizni Boshlashga Tayyormisiz?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-inter">
              Keling, birgalikda zamonaviy web texnologiyalari yordamida sizning g'oyalaringizni hayotga chiqaramiz.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 button-primary text-lg px-8 py-4"
            >
              <span>Aloqa Qilish</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 
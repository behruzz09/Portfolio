import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Briefcase, Star, Award, Users, Clock, Zap, Trophy, Target, Heart } from 'lucide-react';
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

  const stats = [
    { icon: Users, label: 'Projects Completed', value: '50+', description: 'Muvaffaqiyatli yakunlangan loyihalar' },
    { icon: Clock, label: 'Years Experience', value: '3+', description: 'Professional tajriba' },
    { icon: Award, label: 'Client Satisfaction', value: '100%', description: 'Mijozlar mamnuniyati' },
    { icon: Zap, label: 'Technologies', value: '15+', description: 'Zamonaviy texnologiyalar' }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Developer 2023',
      description: 'Yilning eng yaxshi web developer',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: '100% Success Rate',
      description: 'Barcha loyihalar muvaffaqiyatli',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Client Trust',
      description: 'Mijozlar ishonchi va qayta buyurtma',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      text: 'Behruz bizning e-commerce platformamizni ajoyib tarzda yaratdi. Zamonaviy dizayn va tezkor ishlash bilan mijozlarimiz juda mamnun.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      text: 'Behruz bilan ishlash juda yoqimli edi. U bizning brend identitetimizni mukammal aks ettirgan portfolio sayt yaratdi.',
      rating: 5
    }
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
    hidden: { opacity: 0, y: 30 },
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
            {t('about.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-inter">
            {t('about.description')}
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
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl inline-block mb-4 shadow-lg">
                <stat.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-inter mb-1">{stat.label}</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs font-inter">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white">Bio</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-inter">
                {t('about.bio')}
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
                  <Star className="text-white" size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white">Experience</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-inter">
                {t('about.experience')}
              </p>
            </motion.div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                <Code className="text-white" size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white">
                {t('about.technologies')}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {(t('about.techList', { returnObjects: true }) as string[]).map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group card-hover"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 font-medium font-inter">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white mb-8 text-center">
            Yutuqlar
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
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
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <motion.div 
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.gradient} mb-6 shadow-lg relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="text-white" size={32} />
                </motion.div>
                
                <motion.h4 
                  className="text-xl font-semibold font-poppins text-gray-900 dark:text-white mb-3 relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {achievement.title}
                </motion.h4>
                
                <p className="text-gray-600 dark:text-gray-400 font-inter relative z-10">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white mb-8 text-center">
            Mijozlar Fikrlari
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
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
                
                <div className="flex items-center space-x-1 mb-4 relative z-10">
                  {renderStars(testimonial.rating)}
                </div>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter mb-6 italic relative z-10"
                  whileHover={{ scale: 1.01 }}
                >
                  "{testimonial.text}"
                </motion.p>
                
                <div className="relative z-10">
                  <div className="text-gray-900 dark:text-white font-semibold font-poppins">{testimonial.name}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-inter">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Progress */}
        <motion.div 
          className="mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white mb-8 text-center">
            Asosiy Ko'nikmalar
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium font-inter text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-inter">{skill.progress}%</span>
                </div>
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
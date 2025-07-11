import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote, Award, Users, Clock, CheckCircle, ArrowRight, Heart, Target, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      text: 'Behruz bizning e-commerce platformamizni ajoyib tarzda yaratdi. Zamonaviy dizayn va tezkor ishlash bilan mijozlarimiz juda mamnun. U bizning barcha talablarni aniq tushundi va natijada ajoyib mahsulot yaratdi.',
      rating: 5,
      project: 'E-commerce Platform',
      duration: '7 kun',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'Digital Solutions',
      text: 'Behruz bilan ishlash juda yoqimli edi. U bizning brend identitetimizni mukammal aks ettirgan portfolio sayt yaratdi. Professional yondashuv va vaqtida yetkazib berish bilan juda mamnunmiz.',
      rating: 5,
      project: 'Portfolio Website',
      duration: '5 kun',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager',
      company: 'InnovateLab',
      text: 'Behruz bizning startup uchun MVP yaratdi. U bizning g\'oyalarimizni tushundi va ularni hayotga chiqardi. Natijada investorlarni jalb qila oldik va biznesimiz rivojlandi.',
      rating: 5,
      project: 'Startup MVP',
      duration: '10 kun',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'David Kim',
      position: 'Founder',
      company: 'Creative Agency',
      text: 'Behruz bizning agentlik uchun landing page yaratdi. Natijada bizning mijozlar soni 300% oshdi va konversiya darajasi sezilarli darajada yaxshilandi. Uning ishi ajoyib!',
      rating: 5,
      project: 'Landing Page',
      duration: '3 kun',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Lisa Wang',
      position: 'Operations Manager',
      company: 'Global Tech',
      text: 'Behruz bizning korporativ saytimizni qayta loyihaladi. Zamonaviy dizayn va foydalanuvchi tajribasi bilan bizning brendimiz yanada professional ko\'rindi. Uning texnik bilimlari juda yuqori.',
      rating: 5,
      project: 'Corporate Website',
      duration: '8 kun',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Alex Thompson',
      position: 'CEO',
      company: 'StartupXYZ',
      text: 'Behruz bizning mobile app yaratdi. U bizning barcha talablarni aniq tushundi va natijada ajoyib mahsulot yaratdi. Uning ishi sifatli va vaqtida yetkazib beriladi.',
      rating: 5,
      project: 'Mobile App',
      duration: '12 kun',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Muvaffaqiyatli Loyihalar', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Award, number: '100%', label: 'Mijoz Mamnuniyati', gradient: 'from-purple-500 to-pink-500' },
    { icon: Clock, number: '24/7', label: 'Qo\'llab-quvvatlash', gradient: 'from-green-500 to-emerald-500' },
    { icon: Star, number: '5.0', label: 'O\'rtacha Reyting', gradient: 'from-orange-500 to-red-500' }
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
            {t('testimonials.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-inter">
            {t('testimonials.description')}
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

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 card-hover relative overflow-hidden"
              variants={itemVariants}
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
              
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="text-white" size={24} />
                </motion.div>
                <motion.div 
                  className="flex space-x-1"
                  whileHover={{ scale: 1.1 }}
                >
                  {renderStars(testimonial.rating)}
                </motion.div>
              </div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter mb-6 italic relative z-10"
                whileHover={{ scale: 1.01 }}
              >
                "{testimonial.text}"
              </motion.p>

              {/* Project Info */}
              <div className="space-y-3 mb-6 relative z-10">
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-inter">Loyiha:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white font-poppins">{testimonial.project}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Clock size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-inter">Davomiyligi:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white font-poppins">{testimonial.duration}</span>
                </motion.div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 relative z-10">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <motion.div 
                    className="text-gray-900 dark:text-white font-semibold font-poppins"
                    whileHover={{ scale: 1.02 }}
                  >
                    {testimonial.name}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-inter">{testimonial.position}</div>
                  <div className="text-gray-500 dark:text-gray-500 text-xs font-inter">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center text-gray-900 dark:text-white mb-12">
            Yutuqlar
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.gradient} mb-6 shadow-lg`}>
                  <achievement.icon className="text-white" size={32} />
              </div>
                <h4 className="text-xl font-semibold font-poppins text-gray-900 dark:text-white mb-3">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-inter">{achievement.description}</p>
              </motion.div>
          ))}
        </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white mb-4">
              Sizning Loyihangiz Ham Shunday Bo'lishi Mumkin
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-inter">
              Keling, birgalikda sizning g'oyalaringizni hayotga chiqaramiz va siz ham boshqa mijozlarimiz kabi mamnun bo'lasiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
                className="inline-flex items-center space-x-2 button-primary text-lg px-8 py-4"
              >
                <span>Aloqa Qilish</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center space-x-2 button-secondary text-lg px-8 py-4"
              >
                <span>Loyihalarim Ko'rish</span>
                <ArrowRight size={20} />
            </a>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials; 
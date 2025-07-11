import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Smartphone, Globe, Zap, Shield, Star, Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Zamonaviy web ilovalar va saytlar yaratish. React, TypeScript, va boshqa zamonaviy texnologiyalar yordamida.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance', 'Security'],
      gradient: 'from-blue-500 to-cyan-500',
      price: '$200+',
      duration: '3-5 kun'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Foydalanuvchi tajribasiga asoslangan dizayn. Zamonaviy va chiroyli interfeyslar yaratish.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      gradient: 'from-purple-500 to-pink-500',
      price: '$150+',
      duration: '2-3 kun'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Mobil ilovalar yaratish. React Native va Progressive Web Apps (PWA) texnologiyalari.',
      features: ['Cross-platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
      gradient: 'from-green-500 to-emerald-500',
      price: '$500+',
      duration: '5-7 kun'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Online do\'konlar va e-commerce platformalar. To\'lov tizimlari va inventar boshqaruvi.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics'],
      gradient: 'from-orange-500 to-red-500',
      price: '$800+',
      duration: '7-10 kun'
    }
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Muvaffaqiyatli Loyihalar', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Award, number: '100%', label: 'Mijoz Mamnuniyati', gradient: 'from-purple-500 to-pink-500' },
    { icon: Clock, number: '24/7', label: 'Qo\'llab-quvvatlash', gradient: 'from-green-500 to-emerald-500' },
    { icon: Star, number: '5.0', label: 'O\'rtacha Reyting', gradient: 'from-orange-500 to-red-500' }
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

  const reasons = [
    {
      icon: Zap,
      title: 'Tezkor Ishlash',
      description: 'Optimallashtirilgan kod va zamonaviy texnologiyalar yordamida tezkor ishlaydigan ilovalar.'
    },
    {
      icon: Shield,
      title: 'Xavfsizlik',
      description: 'Eng yuqori xavfsizlik standartlari va ma\'lumotlarni himoya qilish.'
    },
    {
      icon: Star,
      title: 'Sifatli Dizayn',
      description: 'Zamonaviy va foydalanuvchi do\'stona interfeyslar.'
    },
    {
      icon: Clock,
      title: 'Vaqtida Yetkazib Berish',
      description: 'Kelishilgan vaqtda loyihani yetkazib berish va qo\'llab-quvvatlash.'
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
            {t('services.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-inter">
            {t('services.description')}
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
          {stats.map((stat, index) => (
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

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 card-hover relative overflow-hidden"
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
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <motion.div 
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>
                <div className="text-right">
                  <motion.div 
                    className="text-2xl font-bold font-poppins gradient-text"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {service.price}
                  </motion.div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">boshlang'ich narx</div>
                  {index === 0 && (
                    <motion.div 
                      className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold mt-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      -20% chegirma
                    </motion.div>
                  )}
                </div>
                </div>

              <motion.h3 
                className="text-2xl font-semibold font-poppins text-gray-900 dark:text-white mb-4 relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                  {service.title}
              </motion.h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-inter relative z-10">
                  {service.description}
                </p>

              <div className="space-y-3 mb-6 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + featureIndex * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-600 dark:text-gray-400 font-inter">{feature}</span>
                  </motion.div>
                  ))}
                </div>

              <motion.button 
                className="group/btn flex items-center space-x-2 button-primary w-full relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="relative z-10">Batafsil</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Offer */}
        <motion.div 
          className="mb-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-8 border border-green-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-green-500 p-3 rounded-full">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white">
                Maxsus Taklif! 🎉
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-inter">
              Birinchi buyurtmangiz uchun <span className="font-bold text-green-600 dark:text-green-400">20% chegirma</span> va <span className="font-bold text-green-600 dark:text-green-400">bepul qo'llab-quvvatlash</span>!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 button-primary text-lg px-8 py-4"
              >
                <span>Hoziroq Buyurtma Bering</span>
                <ArrowRight size={20} />
              </a>
            </div>
        </div>
        </motion.div>
        
        {/* Fast Delivery Section */}
        <motion.div 
          className="mb-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-blue-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-blue-500 p-3 rounded-full">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white">
                Tezkor Yetkazib Berish! ⚡
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold font-poppins gradient-text mb-2">3-5 kun</div>
                <div className="text-gray-600 dark:text-gray-400 font-inter">Mini Sayt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-poppins gradient-text mb-2">5-7 kun</div>
                <div className="text-gray-600 dark:text-gray-400 font-inter">Portfolio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-poppins gradient-text mb-2">7-10 kun</div>
                <div className="text-gray-600 dark:text-gray-400 font-inter">Kompaniya Sayti</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-inter">
              Eng tezkor muddatlar va <span className="font-bold text-blue-600 dark:text-blue-400">24 soat ichida javob</span> beramiz!
            </p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center text-gray-900 dark:text-white mb-12">
            Nega Bizni Tanlash?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                  <reason.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 dark:text-white mb-4">
                  {reason.title}
            </h3>
                <p className="text-gray-600 dark:text-gray-400 font-inter">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center text-gray-900 dark:text-white mb-12">
            Mijozlar Fikrlari
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="text-gray-900 dark:text-white font-semibold font-poppins">{testimonial.name}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-inter">{testimonial.position}</div>
                </div>
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
              Loyihangizni Boshlashga Tayyormisiz?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-inter">
              Keling, birgalikda sizning g'oyalaringizni hayotga chiqaramiz va biznesingizni rivojlantirishga yordam beramiz.
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

export default Services; 
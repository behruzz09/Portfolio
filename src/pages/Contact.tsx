import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, Phone, MapPin, Send, Clock, CheckCircle, Star, Award, Users, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Notification from '../components/Notification';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
    isVisible: boolean;
  }>({
    type: 'info',
    message: '',
    isVisible: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        type: 'error',
        message: 'Iltimos, barcha maydonlarni to\'ldiring',
        isVisible: true
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({
        type: 'error',
        message: 'Iltimos, to\'g\'ri email manzilini kiriting',
        isVisible: true
      });
      return;
    }

    try {
      // Create mailto link with form data
      const subject = `Portfolio Contact - ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:bbekhruz009@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.open(mailtoLink);

      setNotification({
        type: 'success',
        message: 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beraman.',
        isVisible: true
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.',
        isVisible: true
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bbekhruz009@gmail.com',
      link: 'mailto:bbekhruz009@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      value: '@bekhruz09_07',
      link: 'https://t.me/bekhruz09_07',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+998 93 731 67 11',
      link: 'tel:+998937316711',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tashkent, Uzbekistan',
      link: '#',
      color: 'from-purple-500 to-pink-500'
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

  const pricing = [
    {
      title: 'Mini Sayt (Landing Page)',
      price: '1,000,000 so\'m',
      priceUSD: '$75',
      duration: '3-5 kun',
      features: [
        '1 sahifa (Home)',
        'Responsive + SEO',
        'Kontakt forma, CTA tugmalar',
        'Framer Motion kirish animatsiyasi',
        '1 oy bepul qo\'llab-quvvatlash'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      ideal: 'Oddiy xizmat, shaxsiy brend, mahsulot taqdimoti uchun'
    },
    {
      title: 'Portfolio Sayti (Shaxsiy)',
      price: '1,800,000 so\'m',
      priceUSD: '$130',
      duration: '5-7 kun',
      features: [
        '3–4 sahifa: Home, About, Portfolio, Contact',
        'Responsive dizayn + Navbar',
        'CV yuklash, GitHub integratsiyasi',
        'Framer Motion, Lottie, Dark/Light mode',
        '3 oy bepul qo\'llab-quvvatlash'
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      ideal: 'Freelancer, dasturchi, dizaynerlar uchun'
    },
    {
      title: 'Kompaniya Websayti',
      price: '3,000,000 so\'m',
      priceUSD: '$220',
      duration: '7-10 kun',
      features: [
        '5–7 sahifa: Home, Services, Projects, About, Contact, Pricing, Testimonials',
        'SEO + sitemap + robots.txt',
        'Lottie animatsiyalar, Google Maps',
        'Til tanlash (UZ, RU, EN)',
        '6 oy bepul qo\'llab-quvvatlash'
      ],
      gradient: 'from-green-500 to-emerald-500',
      ideal: 'Xizmatlar ko\'rsatuvchi agentlik, kompaniyalar uchun'
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
            {t('contact.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-inter">
            {t('contact.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center text-gray-900 dark:text-white mb-12">
            Narxlar
          </h2>
          
          {/* Special Offer Banner */}
          <motion.div 
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-6 border border-green-500/30 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-gray-900 dark:text-white">
                Maxsus Taklif! 🎉
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-inter">
              Birinchi buyurtmangiz uchun <span className="font-bold text-green-600 dark:text-green-400">20% chegirma</span> va <span className="font-bold text-green-600 dark:text-green-400">bepul qo'llab-quvvatlash</span>!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.title}
                className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 card-hover overflow-hidden ${
                  plan.popular ? 'ring-2 ring-purple-500/50' : ''
                }`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                  animate={{ 
                    x: ['-100%', '100%'],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      ⭐ Eng Mashhur
                    </span>
                  </motion.div>
                )}
                
                <motion.div 
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="text-white" size={24} />
                </motion.div>
                
                <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>
                
                {/* Ideal for */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-inter italic">
                  {plan.ideal}
                </p>
                
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="text-3xl font-bold font-poppins gradient-text">
                    {plan.price}
                  </div>
                  <div className="text-lg text-gray-500 dark:text-gray-400 font-inter">
                    ({plan.priceUSD})
                  </div>
                  {index === 0 && (
                    <motion.div 
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      -20%
                    </motion.div>
                  )}
                </div>
                
                <div className="text-gray-600 dark:text-gray-400 mb-6 font-inter text-center">
                  ⏱️ {plan.duration}
        </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + featureIndex * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-600 dark:text-gray-400 font-inter">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button 
                  className="w-full button-primary relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="relative z-10">Tanlash</span>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div 
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="bg-blue-500 p-3 rounded-xl inline-block mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="text-gray-900 dark:text-white font-semibold font-poppins mb-2">Tezkor Ishlash</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">3-10 kun ichida tayyor</p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="bg-green-500 p-3 rounded-xl inline-block mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="text-gray-900 dark:text-white font-semibold font-poppins mb-2">Kafolat</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">100% qayta ishlash</p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="bg-purple-500 p-3 rounded-xl inline-block mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h4 className="text-gray-900 dark:text-white font-semibold font-poppins mb-2">24/7 Qo'llab-quvvatlash</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">Doimiy aloqa</p>
            </div>
          </motion.div>
          
          {/* Fast Delivery Banner */}
          <motion.div 
            className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-6 border border-green-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-gray-900 dark:text-white">
                Tezkor Yetkazib Berish! ⚡
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-inter text-center">
              Eng tezkor muddatlar va <span className="font-bold text-green-600 dark:text-green-400">24 soat ichida javob</span> beramiz!
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 card-hover"
            variants={itemVariants}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-900 dark:text-white mb-8">
              Xabar Yuborish
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-3 font-medium font-inter">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 font-inter"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-3 font-medium font-inter">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 font-inter"
                  placeholder="Email manzilingizni kiriting"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-3 font-medium font-inter">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none font-inter"
                  placeholder="Loyihangiz haqida gapirib bering..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 button-primary text-lg py-4"
              >
                <Send size={20} />
                <span>{t('contact.send')}</span>
              </button>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                💡 Xabar yuborilganda, sizning email dasturingiz ochiladi va xabar tayyorlanadi.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex items-center space-x-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 card-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r ${info.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold font-poppins">{info.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 font-inter">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact */}
            <motion.div 
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
              variants={itemVariants}
            >
              <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-gray-900 dark:text-white mb-4">
                Tezkor Aloqa
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-inter">
                Telegram orqali tez javob olishni xohlaysizmi?
              </p>
              <a
                href="https://t.me/bekhruz09_07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>{t('contact.telegram')}</span>
              </a>
            </motion.div>

            {/* Testimonials */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-gray-900 dark:text-white mb-4">
                Mijozlar Fikrlari
              </h3>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-inter mb-3 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold font-poppins">{testimonial.name}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-inter">{testimonial.position}</div>
                  </div>
            </div>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div 
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-6 border border-green-500/30"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold font-poppins">Loyihalar uchun mavjud</h4>
                  <p className="text-green-600 dark:text-green-400 text-sm font-inter">Yangi hamkorliklar uchun tayyorman</p>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div 
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-6 border border-purple-500/30"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <Clock className="text-purple-500" size={24} />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold font-poppins">Tezkor javob</h4>
                  <p className="text-purple-600 dark:text-purple-400 text-sm font-inter">24 soat ichida javob beraman</p>
            </div>
          </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Notification */}
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
        duration={5000}
      />
    </div>
  );
};

export default Contact; 
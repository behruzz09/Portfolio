import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';
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
      link: 'mailto:bbekhruz009@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      value: '@bekhruz09_07',
      link: 'https://t.me/bekhruz09_07'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+998 93 731 67 11',
      link: 'tel:+998937316711'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tashkent, Uzbekistan',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-6">Xabar Yuborish</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Email manzilingizni kiriting"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Loyihangiz haqida gapirib bering..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                <span>{t('contact.send')}</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                💡 Xabar yuborilganda, sizning email dasturingiz ochiladi va xabar tayyorlanadi.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <info.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{info.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">
                Tezkor Aloqa
              </h3>
              <p className="text-gray-400 mb-6">
                Telegram orqali tez javob olishni xohlaysizmi?
              </p>
              <a
                href="https://t.me/bekhruz09_07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>{t('contact.telegram')}</span>
              </a>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-white font-semibold">Loyihalar uchun mavjud</h4>
                  <p className="text-green-400 text-sm">Yangi hamkorliklar uchun tayyorman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
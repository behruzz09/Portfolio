import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ShoppingCart, BarChart3, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: t('services.landingPages.title'),
      description: t('services.landingPages.description'),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: ShoppingCart,
      title: t('services.onlineStores.title'),
      description: t('services.onlineStores.description'),
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: BarChart3,
      title: t('services.adminDashboards.title'),
      description: t('services.adminDashboards.description'),
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Palette,
      title: t('services.portfolioWebsites.title'),
      description: t('services.portfolioWebsites.description'),
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mt-6 space-y-2">
                  {getServiceFeatures(index).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Why Choose My Services?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'Modern Design',
                  description: 'Clean, responsive designs that work on all devices'
                },
                {
                  title: 'Fast Performance',
                  description: 'Optimized code for lightning-fast loading times'
                },
                {
                  title: 'Ongoing Support',
                  description: 'Continuous support and maintenance for your projects'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get features for each service
const getServiceFeatures = (serviceIndex: number): string[] => {
  const features = [
    ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
    ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Admin Panel'],
    ['Real-time Analytics', 'User Management', 'Data Visualization', 'Custom Reports'],
    ['Portfolio Showcase', 'Blog Integration', 'Contact Forms', 'Social Media Links']
  ];
  return features[serviceIndex] || [];
};

export default Services; 
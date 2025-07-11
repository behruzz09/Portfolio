import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, Github, Linkedin, Twitter, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Lottie from 'lottie-react';
import ParticleBackground from '../components/ParticleBackground';
import Typewriter from '../components/Typewriter';

// Lottie animation data (you can replace this with your own animation)
const lottieData = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 180,
  "w": 400,
  "h": 400,
  "nm": "Tech Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Circle",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 180, "s": [360]}]},
        "p": {"a": 0, "k": [200, 200, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "d": 1,
              "ty": "el",
              "s": {"a": 0, "k": [100, 100]},
              "p": {"a": 0, "k": [0, 0]},
              "nm": "Ellipse Path 1",
              "mn": "ADBE Vector Shape - Ellipse",
              "hd": false
            },
            {
              "ty": "st",
              "c": {"a": 0, "k": [0.2, 0.6, 1, 1]},
              "o": {"a": 0, "k": 100},
              "w": {"a": 0, "k": 4},
              "lc": 2,
              "lj": 1,
              "ml": 4,
              "bm": 0,
              "nm": "Stroke 1",
              "mn": "ADBE Vector Graphic - Stroke",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5},
              "nm": "Transform"
            }
          ],
          "nm": "Ellipse 1",
          "np": 3,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 180,
      "st": 0,
      "bm": 0
    }
  ],
  "markers": []
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position to background movement
  const backgroundX = useTransform(mouseX, [-300, 300], [100, -100]);
  const backgroundY = useTransform(mouseY, [-300, 300], [100, -100]);

  // Smooth spring animations
  const springConfig = { damping: 15, stiffness: 300 };
  const smoothBackgroundX = useSpring(backgroundX, springConfig);
  const smoothBackgroundY = useSpring(backgroundY, springConfig);

  // Gradient rotation based on mouse position
  const gradientRotation = useTransform(
    mouseX,
    [-300, 300],
    [-90, 90]
  );

  // Opacity based on hover state
  const backgroundOpacity = useTransform(
    mouseX,
    [-300, 300],
    [0.5, 1.0]
  );

  // Scale based on mouse movement
  const backgroundScale = useTransform(
    mouseX,
    [-300, 300],
    [0.8, 1.2]
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const x = clientX - centerX;
      const y = clientY - centerY;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handlePortfolioClick = () => {
    console.log('Portfolio button clicked');
    console.log('Navigating to /projects');
  };

  const handleContactClick = () => {
    console.log('Contact button clicked');
    console.log('Navigating to /contact');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  const achievements = [
    { icon: Award, number: "50+", label: "Loyihalar", gradient: "from-yellow-500 to-orange-500" },
    { icon: Users, number: "100%", label: "Mamnuniyat", gradient: "from-green-500 to-emerald-500" },
    { icon: Clock, number: "24/7", label: "Qo'llab-quvvatlash", gradient: "from-blue-500 to-cyan-500" },
    { icon: Star, number: "5.0", label: "Reyting", gradient: "from-purple-500 to-pink-500" }
  ];

  const features = [
    "Zamonaviy Texnologiyalar",
    "Responsive Dizayn", 
    "SEO Optimizatsiya",
    "Tezkor Ishlash",
    "Xavfsizlik",
    "24/7 Qo'llab-quvvatlash"
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background */}
      <ParticleBackground />
      
      {/* Animated Background Overlays */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-slate-900/50 dark:via-transparent dark:to-slate-800/50"
        style={{
          x: smoothBackgroundX,
          y: smoothBackgroundY,
          rotate: gradientRotation,
          opacity: backgroundOpacity,
          scale: backgroundScale
        }}
      />
      
      {/* Interactive Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          scale: isHovering ? [1, 1.5, 1] : [1, 1.3, 1],
          opacity: isHovering ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3],
          x: isHovering ? [0, 50, 0] : [0, 30, 0],
          y: isHovering ? [0, -50, 0] : [0, -30, 0]
        }}
        transition={{ 
          duration: isHovering ? 3 : 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          x: useTransform(mouseX, [-300, 300], [-50, 50]),
          y: useTransform(mouseY, [-300, 300], [-50, 50])
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          scale: isHovering ? [1, 1.6, 1] : [1, 1.4, 1],
          opacity: isHovering ? [0.4, 0.9, 0.4] : [0.3, 0.7, 0.3],
          x: isHovering ? [0, -60, 0] : [0, -40, 0],
          y: isHovering ? [0, 60, 0] : [0, 40, 0]
        }}
        transition={{ 
          duration: isHovering ? 4 : 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          x: useTransform(mouseX, [-300, 300], [50, -50]),
          y: useTransform(mouseY, [-300, 300], [50, -50])
        }}
      />
      
      {/* Mouse-following gradient orb */}
      <motion.div 
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-2xl pointer-events-none"
        style={{
          x: useTransform(mouseX, [-300, 300], [-150, 150]),
          y: useTransform(mouseY, [-300, 300], [-150, 150]),
          scale: useTransform(mouseX, [-300, 300], [0.6, 1.4])
        }}
        animate={{
          opacity: isHovering ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Additional mouse-following elements */}
      <motion.div 
        className="absolute w-32 h-32 bg-gradient-to-r from-green-400/30 to-cyan-400/30 rounded-full blur-xl pointer-events-none"
        style={{
          x: useTransform(mouseX, [-300, 300], [-80, 80]),
          y: useTransform(mouseY, [-300, 300], [-80, 80]),
          scale: useTransform(mouseX, [-300, 300], [0.5, 1.3])
        }}
        animate={{
          opacity: isHovering ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      
      {/* Mouse cursor indicator */}
      <motion.div 
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50"
        style={{
          x: useTransform(mouseX, [-300, 300], [0, 0]),
          y: useTransform(mouseY, [-300, 300], [0, 0])
        }}
        animate={{
          scale: isHovering ? [1, 1.5, 1] : [1, 1.2, 1],
          opacity: isHovering ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      
      {/* Mouse trail effect */}
      <motion.div 
        className="fixed w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-40"
        style={{
          x: useTransform(mouseX, [-300, 300], [-10, 10]),
          y: useTransform(mouseY, [-300, 300], [-10, 10])
        }}
        animate={{
          scale: isHovering ? [1, 2, 1] : [1, 1.5, 1],
          opacity: isHovering ? [0.6, 1, 0.6] : [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          className="container-max"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              {/* Badge */}
          <motion.div 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <CheckCircle size={16} />
                <span>Professional Web Developer</span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins gradient-text leading-tight">
              <Typewriter 
                text={t('home.title')} 
                speed={150}
                className="inline-block"
              />
            </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 font-inter">
              <Typewriter 
                text={t('home.subtitle')} 
                speed={100}
                delay={2000}
                className="inline-block"
              />
            </h2>
              </div>

          {/* Description */}
          <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-inter mt-8"
                variants={itemVariants}
          >
            {t('home.description')}
          </motion.p>

              {/* Features */}
              <motion.div 
                className="grid grid-cols-2 gap-3 mt-8"
                variants={itemVariants}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm font-inter">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

          {/* Action Buttons */}
          <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mt-8"
                variants={itemVariants}
          >
            <Link
              to="/projects"
              onClick={handlePortfolioClick}
                  className="group flex items-center space-x-3 button-primary text-lg px-8 py-4"
            >
              <span>{t('home.viewPortfolio')}</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/contact"
              onClick={handleContactClick}
                  className="group flex items-center space-x-3 button-secondary text-lg px-8 py-4"
            >
                  <Mail size={24} />
              <span>{t('home.contact')}</span>
            </Link>
          </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex justify-center lg:justify-start items-center space-x-6 pt-8"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Lottie Animation */}
            <motion.div 
              className="hidden lg:flex justify-center items-center"
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                <Lottie 
                  animationData={lottieData}
                  loop={true}
                  autoplay={true}
                  style={{ width: 400, height: 400 }}
                  className="drop-shadow-2xl"
                />
                {/* Floating elements around animation */}
        <motion.div 
                  className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full"
          animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
                    duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
                  className="absolute bottom-10 right-10 w-3 h-3 bg-purple-500 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 right-5 w-2 h-2 bg-green-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
                    duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 card-hover relative overflow-hidden"
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
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.gradient} mb-4 shadow-lg relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="text-white" size={24} />
                </motion.div>
                
                <motion.div 
                  className="text-2xl lg:text-3xl font-bold font-poppins gradient-text mb-2 relative z-10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {achievement.number}
                </motion.div>
                
                <div className="text-gray-600 dark:text-gray-400 text-sm font-inter relative z-10">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 
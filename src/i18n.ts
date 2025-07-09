import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      home: {
        title: 'Hi, I\'m Behruz',
        subtitle: 'Professional Web Developer',
        description: 'I create modern, responsive web applications using React, Tailwind CSS, and cutting-edge technologies.',
        viewPortfolio: 'View Portfolio',
        contact: 'Contact Me'
      },
      about: {
        title: 'About Me',
        bio: 'I am a passionate web developer with expertise in creating modern, responsive web applications. I specialize in React.js, Tailwind CSS, Supabase, Firebase, and Framer Motion.',
        experience: 'With years of experience in web development, I have successfully delivered numerous projects for clients worldwide.',
        technologies: 'Technologies I work with:',
        techList: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Firebase', 'Framer Motion', 'Next.js', 'Node.js']
      },
      services: {
        title: 'My Services',
        description: 'I offer comprehensive web development services to help bring your ideas to life.',
        landingPages: {
          title: 'Landing Pages',
          description: 'High-converting landing pages designed to capture leads and drive sales.'
        },
        onlineStores: {
          title: 'Online Stores',
          description: 'Full-featured e-commerce solutions with secure payment processing.'
        },
        adminDashboards: {
          title: 'Admin Dashboards',
          description: 'Custom admin panels with powerful analytics and management tools.'
        },
        portfolioWebsites: {
          title: 'Portfolio Websites',
          description: 'Professional portfolio websites to showcase your work and skills.'
        }
      },
      projects: {
        title: 'My Projects',
        description: 'Here are some of my recent projects that showcase my skills and expertise.',
        viewLive: 'View Live',
        viewCode: 'View Code'
      },
      testimonials: {
        title: 'Client Testimonials',
        description: 'What my clients say about working with me.'
      },
      contact: {
        title: 'Get In Touch',
        description: 'Ready to start your project? Let\'s discuss how I can help bring your ideas to life.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        telegram: 'Contact via Telegram'
      }
    }
  },
  uz: {
    translation: {
      nav: {
        home: 'Bosh sahifa',
        about: 'Haqida',
        services: 'Xizmatlar',
        projects: 'Loyihalar',
        testimonials: 'Sharhlar',
        contact: 'Aloqa'
      },
      home: {
        title: 'Salom, men Behruz',
        subtitle: 'Professional Web Dasturchi',
        description: 'Men React, Tailwind CSS va zamonaviy texnologiyalar yordamida modern, responsive web ilovalar yarataman.',
        viewPortfolio: 'Portfolioni ko\'rish',
        contact: 'Men bilan bog\'lanish'
      },
      about: {
        title: 'Men haqida',
        bio: 'Men zamonaviy, responsive web ilovalar yaratish bo\'yicha tajribaga ega bo\'lgan ishtiyoqmand web dasturchiman. Men React.js, Tailwind CSS, Supabase, Firebase va Framer Motion bo\'yicha ixtisoslashganman.',
        experience: 'Web dasturlash bo\'yicha yillik tajriba bilan, men dunyo bo\'ylab mijozlar uchun ko\'plab loyihalarni muvaffaqiyatli bajarib berdim.',
        technologies: 'Men ishlaydigan texnologiyalar:',
        techList: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Firebase', 'Framer Motion', 'Next.js', 'Node.js']
      },
      services: {
        title: 'Mening xizmatlarim',
        description: 'Men sizning g\'oyalaringizni hayotga olib kelishga yordam berish uchun keng qamrovli web dasturlash xizmatlarini taklif qilaman.',
        landingPages: {
          title: 'Landing sahifalar',
          description: 'Mijozlarni jalb qilish va sotuvlarni oshirish uchun mo\'ljallangan yuqori konversiyali landing sahifalar.'
        },
        onlineStores: {
          title: 'Online do\'konlar',
          description: 'Xavfsiz to\'lov tizimi bilan to\'liq e-commerce yechimlari.'
        },
        adminDashboards: {
          title: 'Admin paneli',
          description: 'Kuchli analitika va boshqaruv vositalari bilan maxsus admin panellari.'
        },
        portfolioWebsites: {
          title: 'Portfolio saytlar',
          description: 'Ishlaringiz va ko\'nikmalaringizni ko\'rsatish uchun professional portfolio saytlar.'
        }
      },
      projects: {
        title: 'Mening loyihalarim',
        description: 'Mana mening ko\'nikmalarim va tajribamni ko\'rsatadigan so\'nggi loyihalarimdan ba\'zilari.',
        viewLive: 'Jonli ko\'rish',
        viewCode: 'Kodni ko\'rish'
      },
      testimonials: {
        title: 'Mijozlar sharhlari',
        description: 'Mening mijozlarim men bilan ishlash haqida nima deyishadi.'
      },
      contact: {
        title: 'Bog\'lanish',
        description: 'Loyihangizni boshlashga tayyormisiz? Keling, g\'oyalaringizni hayotga olib kelishda qanday yordam bera olishimni muhokama qilaylik.',
        name: 'Ism',
        email: 'Email',
        message: 'Xabar',
        send: 'Xabar yuborish',
        telegram: 'Telegram orqali bog\'lanish'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 
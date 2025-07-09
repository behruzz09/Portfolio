import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Mini Studio',
      description: 'A modern web application for creative professionals to showcase their work and connect with clients. Features include portfolio management, client communication, and project tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      liveUrl: 'https://mini-studio-virid.vercel.app/',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      category: 'Portfolio Platform'
    },
    {
      title: 'IntelliTests',
      description: 'An intelligent testing platform that provides automated assessment tools for educational institutions. Includes question bank management, automated grading, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      liveUrl: 'https://intellitests.netlify.app/',
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'Netlify'],
      category: 'Educational Platform'
    },
    {
      title: 'Vocal Pixie',
      description: 'A voice-controlled music application that allows users to control music playback using voice commands. Features include voice recognition, playlist management, and audio visualization.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://vocal-pixie-e956b2.netlify.app/',
      techStack: ['React', 'Web Speech API', 'CSS3', 'Netlify'],
      category: 'Voice Control App'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('projects.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50 hover:border-blue-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <Eye size={18} />
                      <span>{t('projects.viewLive')}</span>
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's work together to bring your ideas to life with modern web technologies.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Get In Touch</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 
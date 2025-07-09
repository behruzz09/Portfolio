import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (window.gtag) {
      // TODO: Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics ID (G-XXXXXXXXXX)
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Track form submissions
  const trackFormSubmission = () => {
    trackEvent('form_submit', 'contact', 'contact_form');
  };

  // Track project clicks
  const trackProjectClick = (projectName: string) => {
    trackEvent('click', 'project', projectName);
  };

  // Track service clicks
  const trackServiceClick = (serviceName: string) => {
    trackEvent('click', 'service', serviceName);
  };

  // Track language changes
  const trackLanguageChange = (language: string) => {
    trackEvent('language_change', 'user_preference', language);
  };

  // Track theme changes
  const trackThemeChange = (theme: string) => {
    trackEvent('theme_change', 'user_preference', theme);
  };

  // Expose tracking functions globally
  React.useEffect(() => {
    (window as any).trackFormSubmission = trackFormSubmission;
    (window as any).trackProjectClick = trackProjectClick;
    (window as any).trackServiceClick = trackServiceClick;
    (window as any).trackLanguageChange = trackLanguageChange;
    (window as any).trackThemeChange = trackThemeChange;
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics; 
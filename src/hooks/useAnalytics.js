import { useEffect } from 'react';

// Simple analytics tracking without external dependencies
class PortfolioAnalytics {
  constructor() {
    this.events = [];
    this.sessionStart = Date.now();
    this.pageViews = {};
  }

  track(eventName, properties = {}) {
    const event = {
      name: eventName,
      properties,
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    this.events.push(event);

    // In a real application, you would send this to your analytics service
    console.log('Analytics Event:', event);

    // Store in localStorage for demo purposes
    this.saveToStorage();
  }

  pageView(path) {
    this.pageViews[path] = (this.pageViews[path] || 0) + 1;
    this.track('page_view', { path, viewCount: this.pageViews[path] });
  }

  projectView(projectName) {
    this.track('project_view', { projectName });
  }

  contactFormSubmit(formData) {
    this.track('contact_form_submit', {
      hasName: !!formData.name,
      hasEmail: !!formData.email,
      hasSubject: !!formData.subject,
      messageLength: formData.message?.length || 0
    });
  }

  skillFilter(category) {
    this.track('skill_filter', { category });
  }

  projectFilter(filterType, filterValue) {
    this.track('project_filter', { filterType, filterValue });
  }

  socialLinkClick(platform) {
    this.track('social_link_click', { platform });
  }

  resumeDownload() {
    this.track('resume_download');
  }

  themeToggle(newTheme) {
    this.track('theme_toggle', { newTheme });
  }

  getSessionId() {
    let sessionId = sessionStorage.getItem('portfolio_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('portfolio_session_id', sessionId);
    }
    return sessionId;
  }

  saveToStorage() {
    try {
      localStorage.setItem('portfolio_analytics', JSON.stringify({
        events: this.events.slice(-100), // Keep last 100 events
        pageViews: this.pageViews,
        sessionStart: this.sessionStart
      }));
    } catch (error) {
      console.warn('Unable to save analytics to localStorage:', error);
    }
  }

  getAnalyticsData() {
    try {
      const data = localStorage.getItem('portfolio_analytics');
      return data ? JSON.parse(data) : { events: [], pageViews: {}, sessionStart: this.sessionStart };
    } catch (error) {
      console.warn('Unable to load analytics from localStorage:', error);
      return { events: [], pageViews: {}, sessionStart: this.sessionStart };
    }
  }

  // Performance tracking
  trackPerformance() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        this.track('performance_metrics', {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: this.getFirstPaint(),
          connectionType: this.getConnectionType(),
        });
      }
    }
  }

  getFirstPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : null;
  }

  getConnectionType() {
    if ('connection' in navigator) {
      return navigator.connection.effectiveType;
    }
    return 'unknown';
  }
}

// Create global analytics instance
const analytics = new PortfolioAnalytics();

// Hook for easy analytics integration
export const useAnalytics = () => {
  useEffect(() => {
    // Track page view on component mount
    analytics.pageView(window.location.pathname);

    // Track performance metrics after page load
    if (document.readyState === 'complete') {
      analytics.trackPerformance();
    } else {
      window.addEventListener('load', () => analytics.trackPerformance());
    }
  }, []);

  return {
    trackEvent: analytics.track.bind(analytics),
    trackPageView: analytics.pageView.bind(analytics),
    trackProjectView: analytics.projectView.bind(analytics),
    trackContactFormSubmit: analytics.contactFormSubmit.bind(analytics),
    trackSkillFilter: analytics.skillFilter.bind(analytics),
    trackProjectFilter: analytics.projectFilter.bind(analytics),
    trackSocialLinkClick: analytics.socialLinkClick.bind(analytics),
    trackResumeDownload: analytics.resumeDownload.bind(analytics),
    trackThemeToggle: analytics.themeToggle.bind(analytics),
    getAnalyticsData: analytics.getAnalyticsData.bind(analytics),
  };
};

export default analytics;
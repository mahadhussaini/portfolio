import { useAnalytics } from '../hooks/useAnalytics';

// React component for analytics (no visual output)
const Analytics = () => {
  useAnalytics();
  return null;
};

export default Analytics;

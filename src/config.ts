// Configuration file for API endpoints and environment settings

export const config = {
  // Backend API base URL
  apiBaseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://stripe.zynmarketing.xyz' 
    : 'http://localhost:8080',
  
  // Stripe configuration
  stripe: {
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || ''
  },
  
  // JWT token settings
  auth: {
    tokenKey: 'authToken',
    cookieName: 'admin_jwt'
  }
};

export default config;

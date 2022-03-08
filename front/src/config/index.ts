export const configs = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  SERVICE_URL: process.env.NEXT_PUBLIC_SERVICE_URL || 'http://localhost:3000',
  ENV: process.env.NODE_ENV || 'development',
  VERSION: process.env.VERSION || '1',
};

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

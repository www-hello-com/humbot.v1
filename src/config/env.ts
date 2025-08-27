const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080',
} as const;

export default env;

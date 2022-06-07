const devBaseURL = 'https://api.apiopen.top/api/sentences';
const proBaseURL = 'https://api.apiopen.top/api/sentences';

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

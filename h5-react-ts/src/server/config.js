const devBaseURL = 'https://api.apiopen.top'; // 名言
// const devBaseURL = 'http://api.wpbom.com';
// https://www.juhe.cn/docs/api/id/92
const proBaseURL = 'https://api.apiopen.top/api/sentences';

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

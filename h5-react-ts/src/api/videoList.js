import request from '../server/request';

export const getVideoList = (params) =>
  request.get('/api/getShortVideo', params);

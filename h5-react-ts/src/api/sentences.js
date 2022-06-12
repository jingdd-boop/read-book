import request from '../server/request';

export const getSentencesList = () => request.get('/api/sentences');

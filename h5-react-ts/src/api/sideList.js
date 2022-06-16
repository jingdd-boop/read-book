// https://mock.apifox.cn/m1/1130371-0-default
import request from '../server/request';

export const getSideList = (params) => request.get('/api/side', params);

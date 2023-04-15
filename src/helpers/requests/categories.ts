import backendRequest from '../api';

export const readCategories = (): Promise<any> => {
  return backendRequest({
    endpoint: '/events/categories',
    method: 'get',
  });
}

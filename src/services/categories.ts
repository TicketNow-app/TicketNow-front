import backendRequest from '../helpers/api';

export const readCategories = (): Promise<any> => {
  return backendRequest({
    endpoint: '/categories',
    method: 'get',
  });
}

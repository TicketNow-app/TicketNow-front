import backendRequest from '../helpers/api';

export const readCompanies = (): Promise<any> => {
  return backendRequest({
    endpoint: '/companies',
    method: 'get',
  });
}
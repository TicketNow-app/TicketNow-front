import backendRequest from '../api';

export const readCompanies = (): Promise<any> => {
  return backendRequest({
    endpoint: '/companies',
    method: 'get',
  });
}

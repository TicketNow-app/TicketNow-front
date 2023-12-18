import backendRequest from './api';

export const readSales = (id: string): Promise<any> => {
  return backendRequest({
    endpoint: `/sales/${id}`,
    method: 'get',
  });
};

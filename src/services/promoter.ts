import backendRequest from '../helpers/api';

export const readSales = (id: string): Promise<any> => {
  return backendRequest({
    endpoint: `/sales/${id}`,
    method: 'get',
  });
};

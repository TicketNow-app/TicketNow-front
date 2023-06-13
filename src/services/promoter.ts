import backendRequest from '../helpers/api';

export const readSales = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/sales/${id}`,
    method: 'get',
  });
};

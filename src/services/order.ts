import backendRequest from '../helpers/api';

export const readOrders = (id: number): Promise<any> => {
  return backendRequest({
    endpoint: `/orders/${id}`,
    method: 'get',
  });
}
